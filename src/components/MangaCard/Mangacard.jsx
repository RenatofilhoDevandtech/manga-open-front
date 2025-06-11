
import { Link } from 'react-router-dom';

const MangaCard = ({ id, title, genre, imageUrl }) => {
    return (
        <Link to={`/manga/${id}`} className="bg-(--surface-color) rounded-(--border-radius) shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <figure className="relative">
                <img src={imageUrl} alt={`Capa de ${title}`} className="w-full h-auto object-cover aspect-[2/3]" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-center font-bold text-lg">Ver Detalhes</p>
                </div>
            </figure>
            <div className="p-4">
                <h3 className="font-bold text-md text-(--primary-color) truncate">{title}</h3>
                <p className="text-sm text-(--muted-text-color)">{genre}</p>
            </div>
        </Link>
    );
};

export default MangaCard;