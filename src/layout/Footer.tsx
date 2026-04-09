import Image from 'next/image';
import Link from 'next/link';

const footerLinkGroups = [
    {
        title: 'COMMUNITY',
        links: ['Twitter', 'Telegram', 'Discord'],
    },
    {
        title: 'Documentation',
        links: ['User Docs', 'Technical Docs', 'Legal', 'Brand Assets'],
    },
    {
        title: 'Security',
        links: ['Audit', 'Bug Bounty', 'Terms of Use', 'Privacy Policy'],
    },
] as const;

export default function Footer() {
    return (
        <footer className="flex w-full flex-col items-center">
            <section className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-4 py-12 lg:px-[120px] lg:py-20">
                <div className="w-full max-w-[1200px] rounded-[8px] bg-gradient-to-b from-[rgba(140,248,210,0)] to-[#41BDC7] p-[1px] lg:h-[500px]">
                    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-[7px] bg-gradient-to-b from-[rgba(7,7,7,0)] to-[rgba(0,0,0,0.2)] px-4 py-12 lg:px-[259px] lg:py-[112px]">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/assets/Mask group.png"
                                alt="Deploy Liquidity Background"
                                fill
                                className="object-cover object-center opacity-100"
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
                <div className="flex w-full max-w-[212px] shrink-0 flex-col justify-between gap-4 md:h-[168px] md:w-[212px] md:gap-0">
                    <img src="/logo/logo-02.png" className="h-[46] w-[212px]" alt="Luxor Logo" />
                    <div className="text-sm text-white/60">&copy; 2025 Luxor</div>
                </div>
                <div className="flex w-full max-w-[547px] flex-wrap items-start justify-between gap-8 md:flex-nowrap md:gap-0">
                    {footerLinkGroups.map((group, index) => (
                        <div key={group.title} data-aos="slide-up" data-aos-offset={100 + index * 100}>
                            <h4>{group.title}</h4>
                            <ul className="mt-3 flex flex-col gap-[12px]">
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
