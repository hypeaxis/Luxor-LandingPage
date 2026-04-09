const stepItems = [
    {
        number: '1',
        title: 'Create Position & Deposit',
        description: 'Add liquidity and start earning immediately with no complex setup.',
    },
    {
        number: '2',
        title: 'Auto - manage',
        description: 'Luxor automatically places, adjusts, and rebalances your liquidity for optimal ranges.',
    },
    {
        number: '3',
        title: 'Earn Fee',
        description: 'Earn higher, more stable returns through automated strategies.',
    },
] as const;

export default function StepsSection() {
    return (
        <section className="w-full">
            <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center px-4 py-[32px] lg:h-[800px] lg:px-[119px]">
                <h2 className="mb-[81px] text-center" data-aos="fade-up">Smart Liquidity, Simple Steps</h2>
                <div className="grid w-full grid-cols-1 justify-items-center gap-[24px] md:grid-cols-3">
                    {stepItems.map((item, index) => (
                        <div 
                            key={item.number} 
                            data-aos="flip-up" 
                            data-aos-offset={100 + index * 200} 
                            data-aos-easing="ease-in-sine" 
                            className="group flex h-full min-h-[292px] w-full max-w-[384px] flex-col items-start justify-start rounded-[8px] border border-[#87F5CE]/30 bg-[#1C2726] p-[36px]"
                        >
                            <div className="flex h-auto w-full flex-col items-start gap-[24px]">
                                <div
                                    className="text-[64px] font-[800] leading-none"
                                    style={{
                                        background: 'linear-gradient(180deg, #8CF8D2 25.38%, rgba(65, 189, 199, 0) 79.31%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {item.number}
                                </div>
                                <h3 className="text-[24px] font-bold">{item.title}</h3>
                                <p className="text-[16px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}