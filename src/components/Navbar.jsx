import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 50);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-black text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="text-2xl font-bold hidden md:block">Joshua</div>

                    {/* Menu Links */}
                    <div className="flex flex-1 justify-center space-x-6">
                        <Link
                            to="/"
                            onClick={() => {
                                if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="hover:text-gray-400"
                        >
                            Home
                        </Link>
                        <button onClick={() => handleScroll("about")} className="hover:text-gray-400">About</button>
                        <button onClick={() => handleScroll("education")} className="hover:text-gray-400">Education</button>
                        <button onClick={() => handleScroll("contact")} className="hover:text-gray-400">Contact Me</button>
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/star-battle"
                        onClick={() => {
                            if (location.pathname === "/star-battle") window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                    >
                        Star Battle
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
