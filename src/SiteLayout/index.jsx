import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/utils/ScrollToTop"; 

const SiteLayout = () => {
    return (
        // SUGESTÃO 1: Estrutura de layout para garantir que o footer fique no fim
        <div className="flex flex-col min-h-screen bg-(--background-color)">
            <ScrollToTop /> {/* SUGESTÃO 2: Componente que zera o scroll a cada navegação */}
            <Header />

            {/* A tag <main> é semanticamente melhor para o conteúdo principal e a fazemos crescer */}
            <main className="flex-grow">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
}

export default SiteLayout;