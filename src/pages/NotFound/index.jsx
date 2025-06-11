// arquivo: src/pages/NotFound.jsx

import { Link } from "react-router-dom"; // Importando o Link para navegação de SPA
import { FiAlertCircle, FiArrowLeft, FiGift } from "react-icons/fi";

const NotFound = () => {
  return (
    // AJUSTE 1: Layout em coluna no mobile (flex-col) e em linha no desktop (md:flex-row)
    <main className="bg-(--background-color) text-(--text-color) min-h-screen flex flex-col md:flex-row items-center justify-center font-(--font-family) px-6 md:px-12 gap-12">
      <figure className="flex justify-center w-full md:w-1/2 mt-10 md:mt-0">
        <img
          src="/Pagina-Erro.png"
          alt="Personagem de mangá surpreso com um erro 404"
          className="w-full max-w-[500px] h-auto"
        />
      </figure>

      <article className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
        <FiAlertCircle className="text-(--error-color) text-6xl mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-(--primary-color)">
          Oops! Página Perdida.
        </h1>
        <p className="text-lg text-(--muted-text-color) mt-4 max-w-lg">
          Parece que esta página tirou férias. Mas não se preocupe, nosso
          catálogo está cheio de aventuras esperando por você!
        </p>

        {/* Container para os botões de ação */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          {/* AJUSTE 2: Usando <Link> para uma navegação mais rápida e fluida */}
          <Link
            to="/"
            className="bg-(--secondary-color) text-(--primary-color) px-6 py-3 rounded-(--border-radius) text-lg font-bold inline-flex items-center gap-2 hover:bg-yellow-400 transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <FiArrowLeft /> Voltar para a Home
          </Link>

          {/* SUGESTÃO 3: Botão de descoberta para engajar o usuário */}
          <Link
            to="/random-manga"
            className="bg-transparent text-(--primary-color) px-6 py-3 rounded-(--border-radius) text-lg font-bold inline-flex items-center gap-2 border-2 border-(--primary-color) hover:bg-(--primary-color) hover:text-(--surface-color) transition-colors duration-300"
          >
            <FiGift /> Me surpreenda!
          </Link>
        </div>
      </article>
    </main>
  );
};
export default NotFound;
