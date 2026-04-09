import Image from 'next/image';
import { Button } from 'src/components/ui/button';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[calc(100svh-96px)] flex-col justify-center overflow-hidden px-4 py-8 lg:min-h-[calc(100svh-112px)] lg:px-[120px] lg:py-[60px]">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-end justify-end">
                <div className="absolute bottom-[5%] right-[10%] h-[18rem] w-[25rem] rounded-full bg-[#41bdc7]/15 blur-[100px]" />
                <Image
                    src="/assets/Hero_page.png"
                    alt="Liquidity strategy chart"
                    width={1250}
                    height={567}
                    className="h-auto w-[150%] max-w-none object-contain object-right-bottom sm:w-[120%] md:w-[90%] lg:w-[950px] xl:w-[1100px]"
                    priority
                />
            </div>

            <div className="relative z-10 flex w-full flex-col justify-center">
                <h1 className="text-[44px] font-bold leading-[1.1] tracking-tight text-[#ffffff] sm:text-[56px] lg:text-[64px] xl:whitespace-nowrap">
                    Automating Liquidity <br />
                    Amplifying Yield on Aptos
                </h1>

                <p className="mt-6 text-[18px] leading-[1.5] text-[#ffffff]/80 sm:text-[20px] lg:text-[22px] xl:whitespace-nowrap">
                    Smart Liquidity Provision on Aptos - Adaptive on-chain liquidity that <br />
                    maximizes yield and minimizes risk
                </p>

                <div className="mt-12 flex w-full flex-wrap gap-5 sm:w-auto">
                    <Button className="h-[64px] w-full sm:w-[211px] rounded-md bg-[linear-gradient(90deg,#87f5ce_0%,#41bdc7_100%)] text-[20px] font-semibold text-[#0c0c0e] shadow-[0_0_0_1px_rgba(135,245,206,0.18),0_18px_40px_rgba(65,189,199,0.18)] transition-opacity hover:opacity-95">
                        Enter App
                    </Button>
                    <Button className="border-gradient-mint h-[64px] w-full sm:w-[211px] rounded-md bg-transparent text-[20px] font-semibold text-[#ffffff] transition-colors hover:bg-[#ffffff]/5">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
}
