const benefitItems = [
    {
        title: 'Higher, More Stable Returns',
        description: 'Your liquidity is always deployed in optimized ranges, auto-rebalanced, and auto-compounded.',
    },
    {
        title: 'Zero Manual Management',
        description: 'Luxor automates everything - from providing liquidity to exiting and redeploying.',
    },
    {
        title: 'Reduced Impermanent Loss',
        description: 'Dual-position strategies minimize IL, protecting your capital even during high volatility.',
    },
    {
        title: 'Data-Driven Decisions',
        description: 'On-chain backtesting and simulations can preview performance, validate strategies.',
    },
] as const;

export default function BenefitsSection() {
    return (
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 py-20 lg:px-[120px] lg:py-[72px]">
            <h2 className="mb-12 text-center lg:mb-14">User Benefits</h2>

            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
                {benefitItems.map((item) => (
                    <div key={item.title} className="group flex min-h-[220px] w-full flex-col rounded-[8px] border border-[#87F5CE1F] bg-[linear-gradient(180deg,rgba(20,29,27,0.92)_0%,rgba(7,7,7,0.96)_100%)] p-6 shadow-[inset_0px_-4px_4px_0px_rgba(135,245,206,0.2)] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-4px_4px_0px_rgba(135,245,206,0.2),0_8px_30px_rgba(65,189,199,0.1)] lg:min-h-[264px] lg:px-[41px] lg:py-[46px]">
                        <div>
                            <h3 className="mb-4 font-bold text-[#87F5CE]">{item.title}</h3>
                            <div className="h-[1px] w-full" style={{ background: 'linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)' }} />
                        </div>
                        <p className="mt-8 max-w-[40ch] text-white/90">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
