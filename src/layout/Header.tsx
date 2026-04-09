import Link from 'next/link';

export default function Header() {
    return (
        <header className="relative z-[100] mx-auto mt-10 max-w-[1440px] px-4 md:px-8">
            <div className="flex h-[72px] items-center justify-between rounded-full border border-white/10 bg-gradient-to-r from-[#172421] via-[#0E1514] to-[#0C0C0E] px-6 shadow-lg md:px-8">
                <div className="flex flex-1 items-center">
                    <Link href="#top">
                        <img src="/logo/logo-02.png" alt="Luxor Logo" className="h-7 w-auto" />
                    </Link>
                </div>
                <nav className="hidden items-center justify-center gap-10 md:flex">
                    <Link href="#community" className="text-[15px] font-medium text-white/60 transition-colors hover:text-white">
                        Community
                    </Link>
                    <Link href="#documentation" className="text-[15px] font-medium text-white/60 transition-colors hover:text-white">
                        Docs
                    </Link>
                </nav>
                <div className="flex flex-1 items-center justify-end">
                    <button className="h-[42px] w-[117px] rounded-[10px] border-none bg-[image:var(--primary-gradient)] font-semibold text-[#0c0c0e] transition-opacity hover:opacity-90">
                        Launch app
                    </button>
                </div>
            </div>
        </header>
    );
}
