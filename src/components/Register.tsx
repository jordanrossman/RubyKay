import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef, useState } from "react";
import { Reveal, Rule, Rise } from "./animations/Reveal";

/* ----------------------------------------------------------------
   The Work — a register of companies served, on a conveyor that
   responds to the reader. It drifts on its own; scroll velocity
   feeds it; scrolling upstream pulls it backwards; hovering eases
   it to a crawl for inspection.
---------------------------------------------------------------- */

// Trimmed assets — heights hand-balanced so every mark carries
// the same visual weight on the strip.
const MARKS = [
  { name: "13 Ways", src: "/logos/13ways.png", h: "h-12 sm:h-14" },
  { name: "PropertyBrush AI", src: "/logos/propertybrush.png", h: "h-6 sm:h-7" },
  { name: "INVSBL", src: "/logos/invsbl.png", h: "h-9 sm:h-11" },
  { name: "GoodPar", src: "/logos/goodpar.png", h: "h-14 sm:h-16" },
  { name: "Daily Rabbi", src: "/logos/dailyrabbi.png", h: "h-10 sm:h-12" },
  { name: "OV Legacy Research", src: "/logos/ovlegacy.png", h: "h-7 sm:h-8" },
];

function Mark({ mark, index }: { mark: (typeof MARKS)[number]; index: number }) {
  return (
    <li className="group flex items-center shrink-0">
      <div className="flex flex-col items-center gap-4 px-10 sm:px-16">
        <div className="h-16 sm:h-20 flex items-center justify-center">
          <img
            src={mark.src}
            alt={mark.name}
            loading="lazy"
            draggable={false}
            className={`${mark.h} w-auto mix-blend-multiply [filter:grayscale(1)] opacity-60 group-hover:[filter:grayscale(0)] group-hover:opacity-100 transition-[filter,opacity] duration-500 select-none`}
          />
        </div>
        <span className="overline-label text-[0.55rem] text-bone-500 group-hover:text-ink-600 transition-colors duration-500">
          {String(index + 1).padStart(2, "0")} — {mark.name}
        </span>
      </div>
      {/* The seal between entries */}
      <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-ruby-600/40 shrink-0" />
    </li>
  );
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return min + ((((v - min) % range) + range) % range);
};

function Conveyor() {
  const baseX = useMotionValue(0);
  const setRef = useRef<HTMLUListElement>(null);
  const [hovered, setHovered] = useState(false);
  const speedFactor = useRef(1);

  // Drag state — the strip can be grabbed and thrown
  const dragging = useRef(false);
  const lastPointerX = useRef(0);
  const throwVelocity = useRef(0); // px per frame, decays after release

  // Scroll velocity feeds the conveyor: fast reading speeds it up,
  // scrolling back upstream pulls it backwards.
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityBoost = useTransform(smoothVelocity, [-2000, 0, 2000], [-4, 0, 4], {
    clamp: false,
  });

  const advance = (px: number) => {
    const setWidth = setRef.current?.offsetWidth ?? 0;
    if (setWidth > 0) {
      baseX.set(wrap(-setWidth, 0, baseX.get() + px));
    }
  };

  useAnimationFrame((_, delta) => {
    const dt = delta / 1000;
    if (dragging.current) return; // the reader has the strip

    // Ease toward a crawl while the reader inspects a mark
    const target = hovered ? 0.12 : 1;
    speedFactor.current += (target - speedFactor.current) * Math.min(1, dt * 6);

    const BASE_VELOCITY = -42; // px/s — a patient drift
    let moveBy = BASE_VELOCITY * speedFactor.current * dt;
    moveBy += moveBy * Math.abs(velocityBoost.get());
    if (velocityBoost.get() < 0) moveBy = -moveBy;

    // Momentum from a throw, decaying frame over frame
    if (Math.abs(throwVelocity.current) > 0.1) {
      moveBy += throwVelocity.current * dt * 60;
      throwVelocity.current *= Math.pow(0.94, dt * 60);
    } else {
      throwVelocity.current = 0;
    }

    advance(moveBy);
  });

  return (
    <div
      className="relative py-12 lg:py-16 cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: "pan-y" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={(e) => {
        dragging.current = true;
        throwVelocity.current = 0;
        lastPointerX.current = e.clientX;
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        const dx = e.clientX - lastPointerX.current;
        lastPointerX.current = e.clientX;
        throwVelocity.current = dx;
        advance(dx);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      {/* Paper fades at the edges of the conveyor */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-bone-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-bone-50 to-transparent" />

      <motion.div className="flex w-max" style={{ x: baseX }}>
        {[0, 1, 2].map((copy) => (
          <ul
            key={copy}
            ref={copy === 0 ? setRef : undefined}
            aria-hidden={copy > 0}
            className="flex items-center shrink-0"
          >
            {MARKS.map((mark, i) => (
              <Mark key={`${copy}-${mark.name}`} mark={mark} index={i} />
            ))}
          </ul>
        ))}
      </motion.div>
    </div>
  );
}

export default function Register() {
  return (
    <section
      id="work"
      data-chapter="02 — The Work"
      className="bg-bone-50 text-ink-950 py-28 lg:py-36 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="flex items-baseline justify-between mb-4">
          <span className="overline-label text-ruby-600">02 — The Work</span>
          <span className="overline-label text-ink-500 hidden sm:block">
            The Register
          </span>
        </div>
        <Rule className="bg-ink-950/15" />

        <div className="mt-12 lg:mt-16 max-w-3xl">
          <Reveal>
            <h2 className="display text-5xl lg:text-7xl text-ink-950">
              Proof, not promises.
            </h2>
          </Reveal>
          <Rise delay={0.15}>
            <p className="text-lg text-ink-600 leading-relaxed mt-6 max-w-xl">
              Every mark on this register runs on software we designed,
              built, and shipped end to end — live and in use today.
            </p>
          </Rise>
        </div>
      </div>

      <Rise delay={0.2} amount={0.2}>
        <Conveyor />
      </Rise>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <Rise delay={0.1} className="text-center">
          <p className="font-serif italic text-xl lg:text-2xl text-ink-950 text-balance">
            Different industries, one constant —{" "}
            <span className="text-ruby-600">a studio that ships.</span>
          </p>
        </Rise>
      </div>
    </section>
  );
}
