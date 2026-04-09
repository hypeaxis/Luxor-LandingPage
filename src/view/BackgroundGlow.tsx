export default function BackgroundGlow() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -left-40 -top-40 size-96 rounded-full bg-[#87f5ce]/15 blur-[100px] tablet:size-[30rem]" />
            <div className="absolute -right-20 top-20 size-72 rounded-full bg-[#41bdc7]/15 blur-[100px] tablet:size-[26rem]" />
        </div>
    );
}
