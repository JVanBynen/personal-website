import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../App.css'
import Hero from '../components/Hero'
import About from '../components/About'
import EducationFocus from '../components/EducationFocus'
import Contact from '../components/Contact'
import DarkBg from '../assets/visax-r9DV-EdDmWM-unsplash.jpg'

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top whenever HomePage loads
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <div className="relative min-h-screen">
            <img
                src={DarkBg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10">
                <Hero />
                <About />
                <EducationFocus />
                <Contact />
            </div>
        </div>
    )
}

export default HomePage;
