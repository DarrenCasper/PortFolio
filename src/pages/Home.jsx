import { Navbar } from "../component/Navbar";
import { ThemeToggle } from "../component/ThemeToggle";
import { StarBackground } from "../component/StarBackground";

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

            </main>

            {/* Footer */}
        </div>
    )
}

