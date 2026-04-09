import Layout from 'src/layout';
import BackgroundGlow from 'src/view/BackgroundGlow';
import BenefitsSection from 'src/view/BenefitsSection';
import HeroSection from 'src/view/HeroSection';
import StepsSection from 'src/view/StepsSection';
import StrategySection from 'src/view/StrategySection';

export default function Home() {
    return (
        <Layout>
            <BackgroundGlow />
            <main className="relative z-10 mx-auto w-full max-w-[1440px]">
                <HeroSection />
                <StrategySection />
                <BenefitsSection />
            </main>
            <StepsSection />
        </Layout>
    );
}