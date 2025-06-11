// arquivo: src/pages/Catalog.jsx

import { useState, useEffect } from 'react';
import { FiSearch, FiXCircle } from 'react-icons/fi';
import MangaCard from '../../components/MangaCard/Mangacard';

// A constante da lista de mangás foi movida para FORA do componente.
// Isso corrige o aviso do ESLint e melhora a performance.
const fullMockCatalog = [
    { id: 1, title: "Jujutsu Kaisen", genre: "Shounen, Ação", imageUrl: "/images/covers/jujutsu-kaisen.jpg", popularity: 98 },
    { id: 2, title: "Chainsaw Man", genre: "Shounen, Dark Fantasy", imageUrl: "/images/covers/chainsaw-man.jpg", popularity: 95 },
    { id: 3, title: "Berserk", genre: "Seinen, Dark Fantasy", imageUrl: "/images/covers/berserk.jpg", popularity: 100 },
    { id: 4, title: "Spy x Family", genre: "Comédia, Ação", imageUrl: "/images/covers/spy-x-family.jpg", popularity: 92 },
    { id: 5, title: "Naruto", genre: "Shounen, Aventura", imageUrl: "/images/covers/naruto.jpg", popularity: 99 },
    { id: 6, title: "Attack on Titan", genre: "Shounen, Ação Sombria", imageUrl: "/images/covers/attack-on-titan.jpg", popularity: 96 },
    { id: 7, title: "Inuyasha", genre: "Shounen, Romance", imageUrl: "/images/covers/inuyasha.jpg", popularity: 88 },
    { id: 8, title: "Vinland Saga", genre: "Seinen, Histórico", imageUrl: "/images/covers/vinland-saga.jpg", popularity: 94 },
    { id: 9, title: "Fullmetal Alchemist", genre: "Shounen, Fantasia", imageUrl: "/images/covers/fullmetal-alchemist.jpg", popularity: 97 },
    { id: 10, title: "Sailor Moon", genre: "Shoujo, Mahou Shoujo", imageUrl: "/images/covers/sailor-moon.jpg", popularity: 85 },
    { id: 11, title: "Nana", genre: "Josei, Romance", imageUrl: "/images/covers/nana.jpg", popularity: 89 },
    { id: 12, title: "One Piece", genre: "Shounen, Aventura", imageUrl: "/images/covers/one-piece.jpg", popularity: 96 },
];

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [sortBy, setSortBy] = useState('popularity');
    const [filteredCatalog, setFilteredCatalog] = useState(fullMockCatalog);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    useEffect(() => {
        let results = [...fullMockCatalog];
        
        if (searchTerm) {
            results = results.filter(manga => manga.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (selectedGenre) {
            results = results.filter(manga => manga.genre.toLowerCase().includes(selectedGenre.toLowerCase()));
        }
        switch (sortBy) {
            case 'popularity': results.sort((a, b) => b.popularity - a.popularity); break;
            case 'newest': results.sort((a, b) => b.id - a.id); break;
            case 'az': results.sort((a, b) => a.title.localeCompare(b.title)); break;
            default: break;
        }
        setFilteredCatalog(results);
        setCurrentPage(1);
    }, [searchTerm, selectedGenre, sortBy]);

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