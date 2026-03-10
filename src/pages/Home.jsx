import { Navbar } from "../component/Navbar";
import { ThemeToggle } from "../component/ThemeToggle";
import { StarBackground } from "../component/StarBackground";
import { HeroSection } from "../component/Hero";
import { AboutSection } from "../component/AboutSection";
import { SkillsSection } from "../component/Skill";
import { ProjectsSection } from "../component/Project";

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Disini untuk Theme toggle dl (dark or white) */}
            <ThemeToggle />
            {/* Disini untuk Background Effect (misal yang meteor itu) */}
            <StarBackground />
            {/* Navbar */}
            <Navbar/>
            {/* Konten Utama (liat dari component) */}
            <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            </main>

            {/* Footer */}
        </div>
    )
}

