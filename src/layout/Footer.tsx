import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="flex w-full flex-col items-center"
            style={{
                background: 'linear-gradient(171.23deg, rgba(140, 248, 210, 0.08) 3.76%, rgba(12, 12, 14, 0.12) 42.56%, rgba(135, 245, 206, 0.4) 118.97%)',
            }}
        >
            <section className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-4 py-12 lg:px-[120px] lg:py-20">
                <div className="w-full max-w-[1200px] rounded-[8px] bg-gradient-to-b from-[rgba(140,248,210,0)] to-[#41BDC7] p-[1px] lg:h-[500px]">
                    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-[7px] bg-gradient-to-b from-[rgba(7,7,7,0)] to-[rgba(0,0,0,0.2)] px-4 py-12 lg:px-[259px] lg:py-[112px]">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/assets/Mask group.png"
                                alt="Deploy Liquidity Background"
                                fill
                                className="object-cover object-center opacity-90"
                                quality={100}
                            />
                        </div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h2>The Smartest Way to Deploy Liquidity</h2>
                            <p>Unlock optimized, automated, and intelligent liquidity</p>
                        </div>
                        <button className="relative z-10 flex h-[64px] w-[211px] shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#87F5CE_0%,#41BDC7_125.74%)] px-[16px] py-[10px] text-[20px] font-bold text-[#0c0c0e] shadow-[0_0_20px_rgba(135,245,206,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(135,245,206,0.5)]">
                            Enter App
                        </button>
                    </div>
                </div>
            </section>

            <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-12 px-4 pb-[60px] pt-[80px] md:flex-row lg:px-[120px]">
                <div className="flex h-[168px] w-[212px] shrink-0 flex-col justify-between">
                    <img src="/logo/logo-02.png" className="h-[46] w-[212px]" alt="Luxor Logo" />
                    <div className="text-sm text-white/60">&copy; 2025 Luxor</div>
                </div>
                <div className="flex w-full max-w-[547px] flex-wrap justify-between gap-8 md:h-[168px] md:flex-nowrap md:gap-0">
                    <div>
                        <h4 className="uppercase">COMMUNITY</h4>
                        <ul className="flex flex-col gap-[12px]">
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Telegram
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Discord
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Documentation</h4>
                        <ul className="flex flex-col gap-[12px]">
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    User Docs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Technical Docs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Legal
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Brand Assets
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Security</h4>
                        <ul className="flex flex-col gap-[12px]">
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Audit
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Bug Bounty
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
