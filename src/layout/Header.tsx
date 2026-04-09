"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {

    {/* Để thanh header di chuyển lên khi scroll */}
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    {/* Thanh header */}
    return (
        <div className={`sticky top-0 z-50 w-full transition-all ${isScrolled ? "pb-2" : "bg-transparent pt-6 md:pt-10 pb-0"}`}>
            <header className="mx-auto w-full max-w-[1440px] px-4 md:px-8">
                <div className="flex h-[72px] items-center justify-between rounded-full bg-gradient-to-r from-[#172421]/90 via-[#0E1514]/90 to-[#0C0C0E]/90 px-6 backdrop-blur-md md:px-8">
                    <div className="flex flex-1 items-center">
                        <Link href="#top">
                            <img src="/logo/logo-02.png" alt="Luxor Logo" className="h-7 w-auto" />
                        </Link>
                    </div>
                    <nav className="hidden items-center justify-center gap-10 md:flex">
                        <Link href="#community" className="text-[15px] font-medium text-white/60 transition-colors hover:text-white">
                            Community
                        </Link>
                        <Link href="#documentation" className="text-[15px] font-medium text-white/60 transition-colors hover:text-white">
                            Docs
                        </Link>
                    </nav>
                    <div className="flex flex-1 items-center justify-end">
                        <button className="h-[42px] w-[117px] rounded-[10px] border-none bg-[image:var(--primary-gradient)] font-semibold text-[#0c0c0e] transition-opacity hover:opacity-90">
                            Launch app
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}