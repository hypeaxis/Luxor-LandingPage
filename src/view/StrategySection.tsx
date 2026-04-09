import Image from 'next/image';

export default function StrategySection() {
    return (
        <section className="mx:auto flex max-w-[1440px] flex-col justify-center px-4 py-20 lg:h-[800px] lg:px-[120px] lg:py-[60px]">
            <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
                <h2 className="mb-6 ">Explore The Strategy</h2>
                <p>
                    Luxor is the Liquidity Management Protocol on Aptos, enabling LPs to maximize capital efficiency, reduce impermanent
                    loss, and automate liquidity strategies in real time.
                </p>
            </div>

            <div className="mt-16 grid w-full grid-cols-1 gap-[32px] md:grid-cols-3">
                <div className="group flex h-[400px] w-full flex-col items-center justify-center gap-[32px] rounded-[8px] border border-[#41bdc7] bg-transparent px-4 py-[42px] transition-all hover:bg-white/5 lg:px-[64px]">
                    <div className="flex size-[120px] shrink-0 items-center justify-center rounded-full bg-[#87f5ce] transition-transform group-hover:scale-110">
                        <Image src="/assets/explore_page_ui/dual.svg" alt="Dual-Position Management" width={120} height={120} />
                    </div>
                    <h3 className="text-center">
                        Dual-Position<br />Management
                    </h3>
                </div>

                <div className="group flex h-[400px] w-full flex-col items-center justify-center gap-[32px] rounded-[8px] border border-[#41bdc7] bg-transparent px-4 py-[42px] transition-all hover:bg-white/5 lg:px-[64px]">
                    <div className="flex size-[120px] shrink-0 items-center justify-center rounded-full bg-[#87f5ce] transition-transform group-hover:scale-110">
                        <Image src="/assets/explore_page_ui/automation.svg" alt="Automation Modules" width={120} height={120} />
                    </div>
                    <h3 className="text-center">
                        Automation<br />Modules
                    </h3>
                </div>

                <div className="group flex h-[400px] w-full flex-col items-center justify-center gap-[32px] rounded-[8px] border border-[#41bdc7] bg-transparent px-4 py-[42px] transition-all hover:bg-white/5 lg:px-[64px]">
                    <div className="flex size-[120px] shrink-0 items-center justify-center rounded-full bg-[#87f5ce] transition-transform group-hover:scale-110">
                        <Image src="/assets/explore_page_ui/simulation.svg" alt="Simulation-Based Backtesting" width={120} height={120} />
                    </div>
                    <h3 className="text-center">
                        Simulation-Based<br />Backtesting
                    </h3>
                </div>
            </div>
        </section>
    );
}
