// arquivo: src/pages/Catalog.jsx

import { useState, useEffect } from 'react'; // Importando os Hooks
import { FiSearch, FiXCircle } from 'react-icons/fi';
import MangaCard from '../../components/MangaCard/Mangacard';

const Catalog = () => {
    // 1. Catálogo completo com mais mangás, incluindo Naruto e Inuyasha
    const fullMockCatalog = [
        { id: 1, title: "Jujutsu Kaisen", genre: "Shounen, Ação", imageUrl: "https://m.media-amazon.com/images/I/81s+jCm5U3L._AC_UF1000,1000_QL80_.jpg", popularity: 98 },
        { id: 2, title: "Chainsaw Man", genre: "Shounen, Dark Fantasy", imageUrl: "https://m.media-amazon.com/images/I/81s7BfQ+fJL._AC_UF1000,1000_QL80_.jpg", popularity: 95 },
        { id: 3, title: "Berserk", genre: "Seinen, Dark Fantasy", imageUrl: "https://m.media-amazon.com/images/I/91D07epNE9L._AC_UF1000,1000_QL80_.jpg", popularity: 100 },
        { id: 4, title: "Spy x Family", genre: "Comédia, Ação", imageUrl: "https://m.media-amazon.com/images/I/81nWpYO22gL._AC_UF1000,1000_QL80_.jpg", popularity: 92 },
        { id: 5, title: "Naruto Clássico Vol. 1", genre: "Shounen, Aventura", imageUrl: "https://m.media-amazon.com/images/I/71QYLrc-IQL._AC_UF1000,1000_QL80_.jpg", popularity: 99 },
        { id: 6, title: "Naruto Shippuden Vol. 28", genre: "Shounen, Aventura", imageUrl: "https://m.media-amazon.com/images/I/81t+i4S3TqL._AC_UF1000,1000_QL80_.jpg", popularity: 99 },
        { id: 7, title: "Inuyasha Vol. 1", genre: "Shounen, Romance", imageUrl: "https://m.media-amazon.com/images/I/81HG81Kcf2L._AC_UF1000,1000_QL80_.jpg", popularity: 88 },
        { id: 8, title: "Vinland Saga", genre: "Seinen, Histórico", imageUrl: "https://m.media-amazon.com/images/I/9122d5v4p1L._AC_UF1000,1000_QL80_.jpg", popularity: 94 },
        { id: 9, title: "Fullmetal Alchemist", genre: "Shounen, Fantasia", imageUrl: "https://m.media-amazon.com/images/I/9128AixeBFL._AC_UF1000,1000_QL80_.jpg", popularity: 97 },
        { id: 10, title: "Sailor Moon", genre: "Shoujo, Mahou Shoujo", imageUrl: "https://m.media-amazon.com/images/I/81mJA5cR43L._AC_UF1000,1000_QL80_.jpg", popularity: 85 },
        { id: 11, title: "Nana", genre: "Josei, Romance", imageUrl: "https://m.media-amazon.com/images/I/81-k5g0oQDL._AC_UF1000,1000_QL80_.jpg", popularity: 89 },
        { id: 12, title: "One Piece", genre: "Shounen, Aventura", imageUrl: "https://m.media-amazon.com/images/I/812T-T2tfxL._AC_UF1000,1000_QL80_.jpg", popularity: 96 },
    ];

    // 2. Estados para controlar os filtros, busca e paginação
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [sortBy, setSortBy] = useState('popularity');
    const [filteredCatalog, setFilteredCatalog] = useState(fullMockCatalog);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    // 3. useEffect para aplicar filtros e ordenação sempre que algo mudar
    useEffect(() => {
        let results = [...fullMockCatalog];

        // Filtro de Busca
        if (searchTerm) {
            results = results.filter(manga =>
                manga.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filtro de Gênero
        if (selectedGenre) {
            results = results.filter(manga =>
                manga.genre.toLowerCase().includes(selectedGenre.toLowerCase())
            );
        }

        // Ordenação
        switch (sortBy) {
            case 'popularity':
                results.sort((a, b) => b.popularity - a.popularity);
                break;
            case 'newest':
                results.sort((a, b) => b.id - a.id);
                break;
            case 'az':
                results.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }

        setFilteredCatalog(results);
        setCurrentPage(1); // Resetar para a primeira página após filtrar
    }, [searchTerm, selectedGenre, sortBy]);

    // Lógica da Paginação
    const totalPages = Math.ceil(filteredCatalog.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredCatalog.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedGenre('');
        setSortBy('popularity');
    };

    return (
        <main className="bg-(--background-color) font-(--font-family)">
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold text-(--primary-color) mb-2">Nosso Catálogo</h1>
                <p className="text-lg text-(--muted-text-color) mb-8">Encontre sua próxima grande aventura aqui.</p>

                {/* Seção de Filtros e Busca agora é funcional */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-(--surface-color) rounded-(--border-radius) shadow-sm">
                    <div className="relative flex-grow">
                        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-(--muted-text-color)" />
                        <input 
                            type="text" 
                            placeholder="Buscar por título..." 
                            className="w-full p-2 pl-10 border border-(--border-color) rounded-(--border-radius)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select 
                        className="p-2 border border-(--border-color) rounded-(--border-radius)"
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        <option value="">Todos os Gêneros</option>
                        <option value="Shounen">Shounen</option>
                        <option value="Shoujo">Shoujo</option>
                        <option value="Seinen">Seinen</option>
                        <option value="Josei">Josei</option>
                        <option value="Aventura">Aventura</option>
                    </select>
                    <select 
                        className="p-2 border border-(--border-color) rounded-(--border-radius)"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="popularity">Mais Populares</option>
                        <option value="newest">Mais Recentes</option>
                        <option value="az">Ordem A-Z</option>
                    </select>
                    <button onClick={handleClearFilters} className="p-2 flex items-center gap-2 text-(--muted-text-color) hover:text-(--error-color)">
                        <FiXCircle /> Limpar
                    </button>
                </div>

                {/* Grid de Mangás com feedback para busca sem resultados */}
                {currentItems.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {currentItems.map(manga => (
                            <MangaCard key={manga.id} {...manga} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-2xl font-bold text-(--primary-color)">Nenhum mangá encontrado!</p>
                        <p className="text-(--muted-text-color)">Tente ajustar seus filtros ou o termo de busca.</p>
                    </div>
                )}


                {/* Paginação funcional */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                        <nav className="flex gap-2">
                            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-(--surface-color) border border-(--border-color) rounded-(--border-radius) disabled:opacity-50">&laquo;</button>
                            {[...Array(totalPages).keys()].map(num => (
                                <button key={num + 1} onClick={() => setCurrentPage(num + 1)} className={`px-4 py-2 rounded-(--border-radius) ${currentPage === num + 1 ? 'bg-(--secondary-color) text-(--primary-color)' : 'bg-(--surface-color) border border-(--border-color)'}`}>
                                    {num + 1}
                                </button>
                            ))}
                            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-(--surface-color) border border-(--border-color) rounded-(--border-radius) disabled:opacity-50">&raquo;</button>
                        </nav>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Catalog;