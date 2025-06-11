import { FiSearch } from 'react-icons/fi';
import MangaCard from '../../components/MangaCard/Mangacard';

const Catalog = () => {
    
    const mockCatalog = [
        { id: 1, title: "Jujutsu Kaisen", genre: "Shounen, Ação", imageUrl: "https://m.media-amazon.com/images/I/81s+jCm5U3L._AC_UF1000,1000_QL80_.jpg" },
        { id: 2, title: "Chainsaw Man", genre: "Shounen, Dark Fantasy", imageUrl: "https://m.media-amazon.com/images/I/81s7BfQ+fJL._AC_UF1000,1000_QL80_.jpg" },
        { id: 3, title: "Berserk", genre: "Seinen, Dark Fantasy", imageUrl: "https://m.media-amazon.com/images/I/91D07epNE9L._AC_UF1000,1000_QL80_.jpg" },
        { id: 4, title: "Spy x Family", genre: "Comédia, Ação", imageUrl: "https://m.media-amazon.com/images/I/81nWpYO22gL._AC_UF1000,1000_QL80_.jpg" },
        // ...adicione mais
    ];

    return (
        <main className="bg-(--background-color) font-(--font-family)">
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold text-(--primary-color) mb-2">Nosso Catálogo</h1>
                <p className="text-lg text-(--muted-text-color) mb-8">Encontre sua próxima grande aventura aqui.</p>

                {/* Seção de Filtros e Busca */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-(--surface-color) rounded-(--border-radius) shadow-sm">
                    <div className="relative flex-grow">
                        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-(--muted-text-color)" />
                        <input type="text" placeholder="Buscar por título ou autor..." className="w-full p-2 pl-10 border border-(--border-color) rounded-(--border-radius)" />
                    </div>
                    <select className="p-2 border border-(--border-color) rounded-(--border-radius)">
                        <option>Filtrar por Gênero</option>
                        <option>Shounen</option>
                        <option>Shoujo</option>
                        <option>Seinen</option>
                        <option>Josei</option>
                    </select>
                    <select className="p-2 border border-(--border-color) rounded-(--border-radius)">
                        <option>Ordenar por</option>
                        <option>Popularidade</option>
                        <option>Mais Recentes</option>
                        <option>A-Z</option>
                    </select>
                </div>

                {/* Grid de Mangás */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {mockCatalog.map(manga => (
                        <MangaCard key={manga.id} {...manga} />
                    ))}
                </div>

                {/* Paginação */}
                <div className="flex justify-center mt-12">
                    <nav className="flex gap-2">
                        <button className="px-4 py-2 bg-(--surface-color) border border-(--border-color) rounded-(--border-radius)">&laquo;</button>
                        <button className="px-4 py-2 bg-(--secondary-color) text-(--primary-color) rounded-(--border-radius)">1</button>
                        <button className="px-4 py-2 bg-(--surface-color) border border-(--border-color) rounded-(--border-radius)">2</button>
                        <button className="px-4 py-2 bg-(--surface-color) border border-(--border-color) rounded-(--border-radius)">3</button>
                        <button className="px-4 py-2 bg-(--surface-color) border border-(--border-color) rounded-(--border-radius)">&raquo;</button>
                    </nav>
                </div>
            </div>
        </main>
    );
};

export default Catalog;