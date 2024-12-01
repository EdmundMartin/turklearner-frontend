import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-red-500 p-4 shadow-md">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-white font-semibold text-2xl">
                    <a href="/">TurkLearner</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a
                        href="/"
                        className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Home
                    </a>
                    <a
                        href="/topic-list"
                        className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Topics
                    </a>

                    <a
                        href="/vocab-list"
                        className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Vocab Trainer
                    </a>
                    {/*
                    <a
                        href="/contact"
                        className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Contact
                    </a>
                    */}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 space-y-4 text-center">
                    <a
                        href="/home"
                        className="block text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="block text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                        onClick={toggleMenu}
                    >
                        About
                    </a>
                    <a
                        href="/services"
                        className="block text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                        onClick={toggleMenu}
                    >
                        Services
                    </a>
                    <a
                        href="/contact"
                        className="block text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
