import Image from 'next/image';

const strategyItems = [
    {
        icon: '/assets/explore_page_ui/dual.svg',
        alt: 'Dual-Position Management',
        titleTop: 'Dual-Position',
        titleBottom: 'Management',
    },
    {
        icon: '/assets/explore_page_ui/automation.svg',
        alt: 'Automation Modules',
        titleTop: 'Automation',
        titleBottom: 'Modules',
    },
    {
        icon: '/assets/explore_page_ui/simulation.svg',
        alt: 'Simulation-Based Backtesting',
        titleTop: 'Simulation-Based',
        titleBottom: 'Backtesting',
    },
] as const;

export default function StrategySection() {
    return (
        <section className="mx-auto flex max-w-[1440px] flex-col justify-center px-4 py-20 lg:h-[800px] lg:px-[120px] lg:py-[60px]">
            <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center" data-aos="fade-up">
                <h2 className="mb-6 ">Explore The Strategy</h2>
                <p>
                    Luxor is the Liquidity Management Protocol on Aptos, enabling LPs to maximize capital efficiency, reduce impermanent
                    loss, and automate liquidity strategies in real time.
                </p>
            </div>

            <div className="mt-16 grid w-full grid-cols-1 gap-[32px] md:grid-cols-3">
                {strategyItems.map((item, index) => (
                    <div key={item.alt} data-aos="zoom-in" data-aos-offset={100 + index * 150} data-aos-easing="ease-in-sine" className="group flex h-[400px] w-full flex-col items-center justify-center gap-[32px] rounded-[8px] border border-[#41bdc7] bg-transparent px-4 py-[42px] transition-all hover:bg-white/5 lg:px-[64px]">
                        <div className="flex size-[120px] shrink-0 items-center justify-center rounded-full bg-[#87f5ce] transition-transform group-hover:scale-110">
                            <Image src={item.icon} alt={item.alt} width={120} height={120} />
                        </div>
                        <h3 className="text-center font-bold">
                            {item.titleTop}
                            <br />
                            {item.titleBottom}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
