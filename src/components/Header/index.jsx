import { NavLink } from "react-router-dom";
import { FaHome, FaBookOpen, FaTags, FaUserCircle, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-(--primary-color) text-(--surface-color) shadow-(--shadow-md) px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src="/MangaGo-Logo.png" alt="MangaGo Logo" className="w-38 h-36" />
            </div>

            {/* Navegação */}
            <nav className="flex gap-6 text-lg">
                <NavLink to="/" className="flex items-center gap-2 hover:text-(--accent-color)">
                    <FaHome /> Home
                </NavLink>
                <NavLink to="/catalog" className="flex items-center gap-2 hover:text-(--accent-color)">
                    <FaBookOpen /> Catálogo
                </NavLink>
                <NavLink to="/deals" className="flex items-center gap-2 hover:text-(--accent-color)">
                    <FaTags /> Promoções
                </NavLink>
                <NavLink to="/account" className="flex items-center gap-2 hover:text-(--accent-color)">
                    <FaUserCircle /> Minha Conta
                </NavLink>
            </nav>

            {/* Botão de Aluguel */}
            <button className="bg-(--secondary-color) text-(--text-color) px-4 py-2 rounded-(--border-radius) flex items-center gap-2 hover:bg-(--warning-color) transition duration-(--transition-duration)">
                <FaShoppingCart /> Alugar Mangás
            </button>
        </header>
    );
};

export default Header;
