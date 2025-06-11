// arquivo: src/components/Footer.jsx

import { NavLink } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-(--primary-color) text-(--surface-color) border-t-2 border-(--secondary-color)">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    
                    <div className="mb-6 md:mb-0 md:w-1/3">
                        <NavLink to="/" className="inline-block">
                             <img src="/MangaGo-Logo.png" alt="MangaGo Logo" className="h-38 w-auto mx-auto md:mx-0" />
                        </NavLink>
                        <p className="mt-2 text-sm text-(--secondary-color)">Sua porta de entrada para o universo dos mangás.</p>
                    </div>

                    <div className="mb-6 md:mb-0 md:w-1/3">
                        <h3 className="font-bold text-lg mb-2 text-(--secondary-color)">Explore</h3>
                        <nav className="flex flex-col gap-2 text-(--surface-color)">
                            <NavLink to="/how-it-works" className="hover:text-(--secondary-color) transition-colors">Como Funciona</NavLink>
                            <NavLink to="/faq" className="hover:text-(--secondary-color) transition-colors">Dúvidas Frequentes</NavLink>
                            <NavLink to="/contact" className="hover:text-(--secondary-color) transition-colors">Contato</NavLink>
                        </nav>
                    </div>

                    <div className="md:w-1/3">
                        <h3 className="font-bold text-lg mb-2 text-(--secondary-color)">Siga-nos</h3>
                        <div className="flex justify-center md:justify-start gap-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl hover:text-(--secondary-color) transition-transform hover:scale-110">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-2xl hover:text-(--secondary-color) transition-transform hover:scale-110">
                                <FaTwitter />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-2xl hover:text-(--secondary-color) transition-transform hover:scale-110">
                                <FaTiktok />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-(--overlay-bg) py-4 px-6">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-(--surface-color:)">
                    <p>&copy; {new Date().getFullYear()} MangaGO. Todos os direitos reservados.</p>
                    <p className="mt-2 sm:mt-0 text-(--surface-color:)">Desenvolvido por <a href="#" className="font-bold text-white hover:text-(--secondary-color)">ULTRA SUPER GT</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;