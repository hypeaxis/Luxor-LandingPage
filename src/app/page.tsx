import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'src/components/ui/button';

export default function Home() {
    return (
        <div>
            {/* Lớp ánh sáng nền tổng thể */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
                <div className="absolute -top-40 -left-40 size-96 tablet:size-[30rem] rounded-full bg-[#87f5ce]/15 blur-[100px]" />
                <div className="absolute top-20 -right-20 size-72 tablet:size-[26rem] rounded-full bg-[#41bdc7]/15 blur-[100px]" />
            </div>

            {/* Header */}
            <header className="top-6 z-[100] mx-auto max-w-[1440px] px-4 md:px-8">
                <div className="flex h-[72px] items-center justify-between rounded-full bg-gradient-to-r from-[#172421] via-[#0E1514] to-[#0C0C0E] border border-white/10 px-6 md:px-8 shadow-lg">
                    <div className="flex flex-1 items-center">
                        <Link href="#top">
                            <img src="/logo/logo-02.png" alt="Luxor Logo" className="h-7 w-auto" />
                        </Link>
                    </div>
                    <nav className="hidden items-center justify-center md:flex gap-10">
                        <Link href="#community" className="text-[15px] font-medium text-white/60 transition-colors hover:text-white">
                            Community
                        </Link>
                        <Link href="#documentation" className="text-[15px] font-medium text-white/60 transition-colors hover:text-white">
                            Docs
                        </Link>
                    </nav>
                    <div className="flex flex-1 items-center justify-end">
                        <button className="w-[117px] h-[42px] rounded-[10px] bg-[image:var(--primary-gradient)] text-[#0c0c0e] font-semibold border-none hover:opacity-90 transition-opacity">
                            Launch app
                        </button>
                    </div>
                </div>
            </header>
        
            {/* Main Content */}
            <main className="relative z-10 mx-auto w-full max-w-[1440px]">
            {/* 1. HERO SECTION */}
                <section className="relative flex flex-col justify-center px-4 py-12 md:h-[720px] lg:px-[120px] lg:py-[80px] overflow-hidden">
                    
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
                        
                        <h1 className="text-[44px] font-bold leading-[1.1] tracking-tight text-[#ffffff] sm:text-[56px] lg:text-[64px] lg:whitespace-nowrap">
                            Automating Liquidity <br />
                            Amplifying Yield on Aptos
                        </h1>
                                                
                        <p className="mt-6 text-[18px] leading-[1.5] text-[#ffffff]/80 sm:text-[20px] lg:text-[22px] lg:whitespace-nowrap">
                            Smart Liquidity Provision on Aptos – Adaptive on-chain liquidity that <br />
                            maximizes yield and minimizes risk
                        </p>

                        <div className="mt-12 flex flex-wrap gap-5">
                            <Button className="h-[64px] w-[211px] rounded-md bg-[linear-gradient(90deg,#87f5ce_0%,#41bdc7_100%)] text-[20px] font-semibold text-[#0c0c0e] shadow-[0_0_0_1px_rgba(135,245,206,0.18),0_18px_40px_rgba(65,189,199,0.18)] transition-opacity hover:opacity-95">
                                Enter App
                            </Button>                    
                            <Button className="border-gradient-mint h-[64px] w-[211px] rounded-md bg-transparent text-[20px] font-semibold text-[#ffffff] transition-colors hover:bg-[#ffffff]/5">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    
                </section>
            
                {/* 2. Explore The Strategy */}
                <section className="mx:auto flex max-w-[1440px] flex-col justify-center px-4 py-20 lg:px-[120px] lg:h-[800px] lg:py-[60px]">

                    <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
                        <h2 className='mb-6 '>Explore The Strategy</h2>
                        <p>
                            Luxor is the Liquidity Management Protocol on Aptos, enabling LPs to maximize capital efficiency, reduce impermanent loss, and automate liquidity strategies in real time.
                        </p>
                    </div>

                    {/*các thẻ vuông*/}
                    <div className="mt-16 grid w-full grid-cols-1 gap-[32px] md:grid-cols-3">
        
                        {/* Card 1: Dual-Position */}
                        <div className="group flex h-[400px] w-full flex-col items-center justify-center gap-[32px] rounded-[8px] border border-[#41bdc7] bg-transparent px-4 py-[42px] transition-all hover:bg-white/5 lg:px-[64px]">
                            <div className="flex size-[120px] shrink-0 items-center justify-center rounded-full bg-[#87f5ce] transition-transform group-hover:scale-110">
                                <Image src="/assets/explore_page_ui/dual.svg" alt="Dual-Position Management" width={120} height={120} />
                            </div>
                            <h3 className="text-center">
                                Dual-Position<br />Management
                            </h3>
                        </div>

                        {/* Card 2: Automation */}
                        <div className="group flex h-[400px] w-full flex-col items-center justify-center gap-[32px] rounded-[8px] border border-[#41bdc7] bg-transparent px-4 py-[42px] transition-all hover:bg-white/5 lg:px-[64px]">
                            <div className="flex size-[120px] shrink-0 items-center justify-center rounded-full bg-[#87f5ce] transition-transform group-hover:scale-110">
                                <Image src="/assets/explore_page_ui/automation.svg" alt="Automation Modules" width={120} height={120} />
                            </div>
                            <h3 className="text-center">
                                Automation<br />Modules
                            </h3>
                        </div>

                        {/* Card 3: Simulation */}
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

                {/* 3. User Benefits Section */}
                <section className="mx-auto flex max-w-[1440px] flex-col justify-center px-4 py-20 lg:px-[120px] lg:h-[800px] lg:py-[60px]">
                    <h2 className='mb-10 text-center'>User Benefits</h2>

                    <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">                       
                        {/* Card 1 */}
                        <div className="group flex flex-col rounded-[8px] bg-gradient-to-b from-[#141D1B] to-[#070707] p-6 shadow-[inset_0px_-5px_4px_0px_#87F5CE33] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-5px_4px_0px_#87F5CE33,0_8px_30px_rgba(65,189,199,0.1)] lg:h-[264px] lg:px-[41px] lg:py-[56px]">
                            <div>
                                <h3 className="mb-4 text-[#87F5CE]">Higher, More Stable Returns</h3>
                                <div 
                                className="h-[1px] w-full" 
                                style={{background: "linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)"}} 
                                />
                            </div>
                            <p className="mt-8">
                                Your liquidity is always deployed in optimized ranges, auto-rebalanced, and auto-compounded.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group flex flex-col rounded-[8px] bg-gradient-to-b from-[#141D1B] to-[#070707] p-6 shadow-[inset_0px_-5px_4px_0px_#87F5CE33] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-5px_4px_0px_#87F5CE33,0_8px_30px_rgba(65,189,199,0.1)] lg:h-[264px] lg:px-[41px] lg:py-[56px]">
                            <div>
                                <h3 className="mb-4 text-[#87F5CE]">Zero Manual Management</h3>
                                <div 
                                className="h-[1px] w-full" 
                                style={{background: "linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)"}} 
                                />
                            </div>
                            <p className="mt-8">
                                Luxor automates everything - from providing liquidity to exiting and redeploying.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group flex flex-col rounded-[8px] bg-gradient-to-b from-[#141D1B] to-[#070707] p-6 shadow-[inset_0px_-5px_4px_0px_#87F5CE33] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-5px_4px_0px_#87F5CE33,0_8px_30px_rgba(65,189,199,0.1)] lg:h-[264px] lg:px-[41px] lg:py-[56px]">
                            <div>
                                <h3 className="mb-4 text-[#87F5CE]">Reduce Impermanent Loss</h3>
                                <div 
                                className="h-[1px] w-full" 
                                style={{background: "linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)"}} 
                                />
                            </div>
                            <p className="mt-8">
                                Dual-position strategies minimize IL, protecting your capital even during high volatility.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="group flex flex-col rounded-[8px] bg-gradient-to-b from-[#141D1B] to-[#070707] p-6 shadow-[inset_0px_-5px_4px_0px_#87F5CE33] transition-all hover:-translate-y-1 hover:shadow-[inset_0px_-5px_4px_0px_#87F5CE33,0_8px_30px_rgba(65,189,199,0.1)] lg:h-[264px] lg:px-[41px] lg:py-[56px]">
                            <div>
                                <h3 className="mb-4 text-[#87F5CE]">Data-Driven Decisions</h3>
                                <div 
                                className="h-[1px] w-full" 
                                style={{background: "linear-gradient(90deg, #87F5CE 0%, rgba(65, 189, 199, 0) 100%)"}} 
                                />
                            </div>
                            <p className="mt-8">
                                On-chain backtesting and simulations can preview performance, validate strategies.
                            </p>
                        </div>

                    </div>
                </section>

                {/* 4. Smart Liquidity, Simple Steps */}
                <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center px-4 py-[32px] lg:h-[800px] lg:px-[119px]"
                    style={{
                        background: "linear-gradient(180deg, #121817 -24.62%, #192422 137.47%)"
                    }}
                >
                    <h2 className='mb-[81px] text-center'>Smart Liquidity, Simple Steps</h2>
                    <div className='grid w-full grid-cols-1 gap-[24px] md:grid-cols-3 lg:h-[292px]'>
                        <div className="group flex flex-col items-start justify-center rounded-[8px] border border-[#87F5CE]/30 bg-[#1C2726] p-[36px] w-[384px] h-[292px]">
                            <div className="flex flex-col items-start w-[312px] h-[173px] gap-[24px]">
                                <div 
                                    className="text-[64px] font-[800] leading-none"
                                    style={{
                                        background: "linear-gradient(180deg, #8CF8D2 25.38%, rgba(65, 189, 199, 0) 79.31%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >1
                                </div>
                                <h3 className='text-[24px]'>Create Position & Deposit</h3>
                                <p className='text-[16px]'>
                                    Add liquidity and start earning immediately with no complex setup.
                                </p>
                            </div>
                        </div>
                        <div className="group flex flex-col items-start justify-center rounded-[8px] border border-[#87F5CE]/30 bg-[#1C2726] p-[36px] w-[384px] h-[292px]">
                            <div className="flex flex-col items-start w-[312px] h-[173px] gap-[24px]">
                                <div 
                                    className="text-[64px] font-[800] leading-none"
                                    style={{
                                        background: "linear-gradient(180deg, #8CF8D2 25.38%, rgba(65, 189, 199, 0) 79.31%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >2
                                </div>
                                <h3 className='text-[24px]'>Auto - manage</h3>
                                <p className='text-[16px]'>
                                    Luxor automatically places, adjusts, and rebalances your liquidity for optimal ranges.
                                </p>
                            </div>
                        </div>
                        <div className="group flex flex-col items-start justify-center rounded-[8px] border border-[#87F5CE]/30 bg-[#1C2726] p-[36px] w-[384px] h-[292px]">
                            <div className="flex flex-col items-start w-[312px] h-[173px] gap-[24px]">
                                <div 
                                    className="text-[64px] font-[800] leading-none"
                                    style={{
                                        background: "linear-gradient(180deg, #8CF8D2 25.38%, rgba(65, 189, 199, 0) 79.31%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >3
                                </div>
                                <h3 className='text-[24px]'>Earn Fee</h3>
                                <p className='text-[16px]'>
                                    Earn higher, more stable returns through automated strategies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="flex w-full flex-col items-center"
                    style={{ 
                    background: "linear-gradient(171.23deg, rgba(140, 248, 210, 0.08) 3.76%, rgba(12, 12, 14, 0.12) 42.56%, rgba(135, 245, 206, 0.4) 118.97%)" 
            }}
            >
                {/* The Smartest Way to Deploy Liquidity */}
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
                                <h2>
                                    The Smartest Way to Deploy Liquidity
                                </h2>
                                <p>
                                    Unlock optimized, automated, and intelligent liquidity
                                </p>
                            </div>
                            <button className="relative z-10 flex h-[64px] w-[211px] shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#87F5CE_0%,#41BDC7_125.74%)] px-[16px] py-[10px] text-[20px] font-bold text-[#0c0c0e] shadow-[0_0_20px_rgba(135,245,206,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(135,245,206,0.5)]">
                                Enter App
                            </button>
                        </div>
                    </div>
                </section>

                <div className='mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-12 px-4 pb-[60px] pt-[80px] md:flex-row lg:px-[120px]'>
                    <div className="flex h-[168px] w-[212px] shrink-0 flex-col justify-between">
                        <img src="/logo/logo-02.png" className='w-[212px] h-[46]' alt="Luxor Logo" />
                        <div className="text-sm text-white/60">
                            &copy; 2025 Luxor
                        </div>
                    </div>             
                        <div className='flex w-full max-w-[547px] flex-wrap justify-between gap-8 md:h-[168px] md:flex-nowrap md:gap-0'>
                            <div>
                                <h4 className="uppercase">COMMUNITY</h4>
                            <ul className="flex flex-col gap-[12px]">
                                <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Twitter</Link></li>
                                <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Telegram</Link></li>
                                <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Discord</Link></li>
                            </ul>
                            </div>

                            <div>
                                <h4>Documentation</h4>
                                <ul className="flex flex-col gap-[12px]">
                                    <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">User Docs</Link></li>
                                    <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Technical Docs</Link></li>
                                    <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Legal</Link></li>
                                    <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Brand Assets</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4>Security</h4>
                                <ul className="flex flex-col gap-[12px]">
                                    <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Audit</Link></li>
                                    <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Bug Bounty</Link></li>
                                    <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Terms of Use</Link></li>
                                    <li><Link href="#" className="text-sm text-[#8CF8D2] transition-colors hover:text-white">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    );
}