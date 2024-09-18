import HomeAboutSection from "./sections/HomeAboutSection";
import HomeBannerSection from "./sections/HomeBannerSection";
// import HomeContactUsSection from "./sections/HomeContactUsSection";
import HomeExpSection from "./sections/HomeExpSection";
import HomeProjectSection from "./sections/HomeProjectSection";
import HomeSkillsSection from "./sections/HomeSkillsSection";

export default function HomePage() {
    return (
        <>
            <HomeBannerSection />
            <HomeAboutSection />
            <HomeSkillsSection />
            <HomeExpSection />
            <HomeProjectSection />
            {/* <HomeContactUsSection /> */}
        </>
    )
}
