import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to section by ID
    const handleScroll = (id) => {
        if (location.pathname !== "/") {
            // Navigate to homepage first
            navigate("/");
            // Wait for DOM to render
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 50);
        } else {
            // Already on homepage, scroll directly
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold hidden md:inline">Joshua</div>

                <div className="space-x-6">
                    <Link to="/" onClick={() => {
                        if (location.pathname === "/") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }} className="hover:text-gray-400">Home</Link>
                    <button
                        onClick={() => handleScroll("about")}
                        className="hover:text-gray-400"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleScroll("education")}
                        className="hover:text-gray-400"
                    >
                        Education
                    </button>
                    <button
                        onClick={() => handleScroll("contact")}
                        className="hover:text-gray-400"
                    >
                        Contact Me
                    </button>
                </div>

                <Link to="/star-battle" onClick={() => {
                    if (location.pathname === "/star-battle") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }} className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Star Battle</Link>
            </div>
        </nav>
    );
};

export default Navbar;
