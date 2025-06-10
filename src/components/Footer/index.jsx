const Footer = () => {
    return (
        <footer className="bg-(--surface-color) text-(--text-color) text-center py-4 border-t border-(--border-color) shadow-(--shadow-sm)">
            <p className="text-lg font-semibold">Desenvolvido por <strong>ULTRA SUPER GT</strong></p>
            <p className="text-sm text-(--muted-text-color)">&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
        </footer>
    );
}

export default Footer;
