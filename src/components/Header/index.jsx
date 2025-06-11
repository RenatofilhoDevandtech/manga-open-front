// arquivo: src/components/Header.jsx

import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaHome, FaBookOpen, FaTags, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClasses = ({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-(--border-radius) transition-colors duration-(--transition-duration) ${
            isActive
                ? 'text-(--secondary-color) font-bold'
                : 'text-(--surface-color) hover:bg-white/10'
        }`;

    return (
        <header className="bg-(--primary-color) shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                
                <NavLink to="/" aria-label="Página Inicial">
                    <img src="/MangaGo-Logo.png" alt="MangaGo Logo" className="h-38 w-auto" />
                </NavLink>

                <nav className="hidden md:flex items-center gap-4 text-md">
                    <NavLink to="/" className={navLinkClasses}> <FaHome /> Home </NavLink>
                    <NavLink to="/catalog" className={navLinkClasses}> <FaBookOpen /> Catálogo </NavLink>
                    <NavLink to="/deals" className={navLinkClasses}> <FaTags /> Promoções </NavLink>
                    <NavLink to="/account" className={navLinkClasses}> <FaUserCircle /> Minha Conta </NavLink>
                </nav>

                <button className="hidden md:flex bg-(--secondary-color) text-(--primary-color) px-5 py-2.5 rounded-(--border-radius) font-bold items-center gap-2 hover:bg-yellow-400 transition-transform duration-300 hover:scale-105">
                    <FaShoppingCart /> Alugar Mangás
                </button>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
                        {isMenuOpen ? <FaTimes size={24} className="text-(--surface-color)" /> : <FaBars size={24} className="text-(--surface-color)" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden bg-(--primary-color) flex flex-col items-center gap-4 py-4 absolute w-full shadow-lg">
                    <NavLink to="/" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}> <FaHome /> Home </NavLink>
                    <NavLink to="/catalog" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}> <FaBookOpen /> Catálogo </NavLink>
                    <NavLink to="/deals" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}> <FaTags /> Promoções </NavLink>
                    <NavLink to="/account" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}> <FaUserCircle /> Minha Conta </NavLink>
                    <button className="w-11/12 mt-4 bg-(--secondary-color) text-(--primary-color) px-5 py-2.5 rounded-(--border-radius) font-bold flex items-center justify-center gap-2">
                        <FaShoppingCart /> Alugar Mangás
                    </button>
                </nav>
            )}
        </header>
    );
};

export default Header;