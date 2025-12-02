import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    return (
        <nav className="sticky top-0 z-50 h-[72px] bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="RubyKay Labs"
                            width={160}
                            height={36}
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="#services"
                            className="text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="#case-studies"
                            className="text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="#process"
                            className="text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors"
                        >
                            Process
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 text-white text-[15px] font-medium rounded-lg hover:bg-slate-700 transition-all hover:-translate-y-0.5"
                        >
                            Book a Call
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-slate-700">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
