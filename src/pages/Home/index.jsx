
import { FaArrowRight } from "react-icons/fa";
// PASSO 1: Importe a imagem como um módulo
import bannerBackground from "../../assets/Banner3.svg"; // <-- Verifique se este caminho está correto

const Home = () => {
  // Mock data para a seção de destaques visuais
  const popularMangas = [
    {
      id: 1,
      title: "Jujutsu Kaisen",
      imageUrl:
        "https://m.media-amazon.com/images/I/81s+jCm5U3L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Chainsaw Man",
      imageUrl:
        "https://m.media-amazon.com/images/I/81s7BfQ+fJL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "Berserk",
      imageUrl:
        "https://m.media-amazon.com/images/I/91D07epNE9L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <main className="bg-(--background-color) text-(--text-color) min-h-screen flex flex-col items-center font-(--font-family)">
      {/* Banner de boas-vindas */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        
        {/* PASSO 2: Use o style inline com a imagem importada */}
        <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110"
            style={{ backgroundImage: `url(${bannerBackground})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-(--background-color) via-transparent to-transparent"></div>{" "}
        {/* Efeito de fade com o fundo */}
        <div className="relative z-10 text-center p-8 bg-[rgba(0,0,0,0.6)] rounded-(--border-radius) shadow-(--shadow-md) backdrop-blur-sm">
          <h1 className="text-5xl font-bold text-(--surface-color) drop-shadow-lg">
            Entre no Mundo dos Mangás!
          </h1>
          <p className="text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Descubra histórias incríveis, personagens inesquecíveis e mergulhe
            na cultura japonesa!
          </p>
          <button className="bg-(--secondary-color) text-(--primary-color) mt-8 px-8 py-3 rounded-(--border-radius) text-lg font-bold inline-flex items-center gap-3 hover:bg-yellow-400 transition-all duration-(--transition-duration) shadow-(--shadow-md) transform hover:scale-105">
            Explorar Mangás Agora
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Seção de Destaques Melhorada */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 -mt-24 relative z-20">
        {/* Card de Populares com visuais */}
        <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-lg text-center border border-(--border-color) transition-transform duration-(--transition-duration) hover:-translate-y-2">
          <h2 className="text-3xl font-bold text-(--primary-color)">
            🔥 Mangás Populares
          </h2>
          <p className="text-lg text-(--muted-text-color) mb-6">
            Veja o que todos estão lendo!
          </p>
          {/* Grid para as capas dos mangás */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {popularMangas.map((manga) => (
              <div key={manga.id}>
                <img
                  src={manga.imageUrl}
                  alt={manga.title}
                  className="rounded-md w-full h-auto object-cover shadow-md aspect-[2/3]"
                />
              </div>
            ))}
          </div>
          <button className="bg-(--accent-color) text-(--surface-color) mt-4 px-5 py-2 rounded-(--border-radius) text-lg font-semibold hover:bg-(--error-color) transition-colors duration-(--transition-duration)">
            Ver Catálogo Completo
          </button>
        </div>
        {/* Card de Ofertas */}
        <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-lg text-center border border-(--border-color) transition-transform duration-(--transition-duration) hover:-translate-y-2">
          <h2 className="text-3xl font-bold text-(--primary-color)">
            💰 Ofertas e Promoções
          </h2>
          <p className="text-lg text-(--muted-text-color)">
            Aproveite descontos exclusivos para assinantes!
          </p>
          <div className="my-8">
            <p className="text-5xl font-bold text-(--success-color)">20% OFF</p>
            <p className="text-(--muted-text-color)">No seu primeiro mês!</p>
          </div>
          <button className="bg-(--success-color) text-(--surface-color) mt-4 px-5 py-2 rounded-(--border-radius) text-lg font-semibold hover:bg-green-600 transition-colors duration-(--transition-duration)">
            Quero meu Desconto!
          </button>
        </div>
      </section>

      {/* Benefícios do Serviço */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-md text-center border border-(--border-color)">
          <h2 className="text-2xl font-bold text-(--primary-color)">
            🚀 Entrega Rápida
          </h2>
          <p className="text-(--muted-text-color)">
            Receba seus mangás em poucos dias, sem demora!
          </p>
        </div>
        <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-md text-center border border-(--border-color)">
          <h2 className="text-2xl font-bold text-(--primary-color)">
            📚 Catálogo Imenso
          </h2>
          <p className="text-(--muted-text-color)">
            Mihhares de volumes, dos clássicos aos lançamentos.
          </p>
        </div>
        <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-md text-center border border-(--border-color)">
          <h2 className="text-2xl font-bold text-(--primary-color)">
            💸 Cancele Quando Quiser
          </h2>
          <p className="text-(--muted-text-color)">
            Flexibilidade total para você, sem contratos ou multas.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
