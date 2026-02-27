import type { VercelRequest, VercelResponse } from "@vercel/node";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = "14782be3b5";
const MAILCHIMP_SERVER_PREFIX = MAILCHIMP_API_KEY?.split("-").pop();

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  teamSize: string;
  markets: string;
  message: string;
  budget: string;
}

async function hashEmail(email: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(email.toLowerCase());
  const hashBuffer = await crypto.subtle.digest("MD5", data).catch(() => null);

  if (!hashBuffer) {
    let hash = 0;
    const str = email.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  }

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data: ContactFormData = req.body;

    if (!MAILCHIMP_API_KEY) {
      console.error("Mailchimp API key not configured");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const teamSizeMap: Record<string, number> = {
      "10-25": 17,
      "25-50": 37,
      "50-100": 75,
      "100+": 150,
    };

    const budgetMap: Record<string, number> = {
      "$10k-$25k": 17500,
      "$25k-$50k": 37500,
      "$50k+": 75000,
    };

    const mailchimpData = {
      email_address: data.email,
      status: "subscribed",
      merge_fields: {
        FNAME: data.firstName,
        LNAME: data.lastName,
        PHONE: data.phone,
        MMERGE5: teamSizeMap[data.teamSize] || 0,
        MMERGE6: data.company,
        MMERGE7: data.role,
        MMERGE8: data.markets,
        MMERGE9: data.message,
        MMERGE10: budgetMap[data.budget] || 0,
      },
    };

    const response = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailchimpData),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      if (result.title === "Member Exists") {
        const emailHash = await hashEmail(data.email);
        const updateResponse = await fetch(
          `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${emailHash}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `apikey ${MAILCHIMP_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              merge_fields: mailchimpData.merge_fields,
            }),
          }
        );

        if (!updateResponse.ok) {
          const updateResult = await updateResponse.json();
          console.error("Mailchimp update error:", updateResult);
          return res.status(500).json({ error: "Failed to update contact" });
        }

        return res.status(200).json({ success: true, updated: true });
      }

      console.error("Mailchimp error:", result);
      return res
        .status(500)
        .json({ error: result.detail || "Failed to subscribe" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
