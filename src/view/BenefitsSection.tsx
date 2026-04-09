export default function BenefitsSection() {
    return (
        <section className="mx-auto flex max-w-[1440px] flex-col justify-center px-4 py-20 lg:h-[800px] lg:px-[120px] lg:py-[60px]">
            <h2 className="mb-10 text-center">User Benefits</h2>

            <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
                <div className="group flex flex-col rounded-[8px] bg-gradient-to-b from-[#141D1B] to-[#070707] p-6 shadow-[inset_0px_-5px_4px_0px_#87F5CE33] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-5px_4px_0px_#87F5CE33,0_8px_30px_rgba(65,189,199,0.1)] lg:h-[264px] lg:px-[41px] lg:py-[56px]">
                    <div>
                        <h3 className="mb-4 text-[#87F5CE]">Higher, More Stable Returns</h3>
                        <div className="h-[1px] w-full" style={{ background: 'linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)' }} />
                    </div>
                    <p className="mt-8">Your liquidity is always deployed in optimized ranges, auto-rebalanced, and auto-compounded.</p>
                </div>

                <div className="group flex flex-col rounded-[8px] bg-gradient-to-b from-[#141D1B] to-[#070707] p-6 shadow-[inset_0px_-5px_4px_0px_#87F5CE33] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-5px_4px_0px_#87F5CE33,0_8px_30px_rgba(65,189,199,0.1)] lg:h-[264px] lg:px-[41px] lg:py-[56px]">
                    <div>
                        <h3 className="mb-4 text-[#87F5CE]">Zero Manual Management</h3>
                        <div className="h-[1px] w-full" style={{ background: 'linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)' }} />
                    </div>
                    <p className="mt-8">Luxor automates everything - from providing liquidity to exiting and redeploying.</p>
                </div>

                <div className="group flex flex-col rounded-[8px] bg-gradient-to-b from-[#141D1B] to-[#070707] p-6 shadow-[inset_0px_-5px_4px_0px_#87F5CE33] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-5px_4px_0px_#87F5CE33,0_8px_30px_rgba(65,189,199,0.1)] lg:h-[264px] lg:px-[41px] lg:py-[56px]">
                    <div>
                        <h3 className="mb-4 text-[#87F5CE]">Reduce Impermanent Loss</h3>
                        <div className="h-[1px] w-full" style={{ background: 'linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)' }} />
                    </div>
                    <p className="mt-8">Dual-position strategies minimize IL, protecting your capital even during high volatility.</p>
                </div>

                <div className="group flex flex-col rounded-[8px] bg-gradient-to-b from-[#141D1B] to-[#070707] p-6 shadow-[inset_0px_-5px_4px_0px_#87F5CE33] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-5px_4px_0px_#87F5CE33,0_8px_30px_rgba(65,189,199,0.1)] lg:h-[264px] lg:px-[41px] lg:py-[56px]">
                    <div>
                        <h3 className="mb-4 text-[#87F5CE]">Data-Driven Decisions</h3>
                        <div className="h-[1px] w-full" style={{ background: 'linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)' }} />
                    </div>
                    <p className="mt-8">On-chain backtesting and simulations can preview performance, validate strategies.</p>
                </div>
            </div>
        </section>
    );
}
