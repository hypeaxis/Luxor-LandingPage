export default function StepsSection() {
    return (
        <section className="w-full" style={{ background: 'linear-gradient(180deg, #121817 -24.62%, #192422 137.47%)' }}>
            <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center px-4 py-[32px] lg:h-[800px] lg:px-[119px]">
                <h2 className="mb-[81px] text-center">Smart Liquidity, Simple Steps</h2>
                <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3 lg:h-[292px]">
                    <div className="group flex h-[292px] w-[384px] flex-col items-start justify-center rounded-[8px] border border-[#87F5CE]/30 bg-[#1C2726] p-[36px]">
                        <div className="flex h-[173px] w-[312px] flex-col items-start gap-[24px]">
                            <div
                                className="text-[64px] font-[800] leading-none"
                                style={{
                                    background: 'linear-gradient(180deg, #8CF8D2 25.38%, rgba(65, 189, 199, 0) 79.31%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                1
                            </div>
                            <h3 className="text-[24px]">Create Position & Deposit</h3>
                            <p className="text-[16px]">Add liquidity and start earning immediately with no complex setup.</p>
                        </div>
                    </div>

                    <div className="group flex h-[292px] w-[384px] flex-col items-start justify-center rounded-[8px] border border-[#87F5CE]/30 bg-[#1C2726] p-[36px]">
                        <div className="flex h-[173px] w-[312px] flex-col items-start gap-[24px]">
                            <div
                                className="text-[64px] font-[800] leading-none"
                                style={{
                                    background: 'linear-gradient(180deg, #8CF8D2 25.38%, rgba(65, 189, 199, 0) 79.31%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                2
                            </div>
                            <h3 className="text-[24px]">Auto - manage</h3>
                            <p className="text-[16px]">Luxor automatically places, adjusts, and rebalances your liquidity for optimal ranges.</p>
                        </div>
                    </div>

                    <div className="group flex h-[292px] w-[384px] flex-col items-start justify-center rounded-[8px] border border-[#87F5CE]/30 bg-[#1C2726] p-[36px]">
                        <div className="flex h-[173px] w-[312px] flex-col items-start gap-[24px]">
                            <div
                                className="text-[64px] font-[800] leading-none"
                                style={{
                                    background: 'linear-gradient(180deg, #8CF8D2 25.38%, rgba(65, 189, 199, 0) 79.31%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                3
                            </div>
                            <h3 className="text-[24px]">Earn Fee</h3>
                            <p className="text-[16px]">Earn higher, more stable returns through automated strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
