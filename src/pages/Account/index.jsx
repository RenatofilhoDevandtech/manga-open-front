// arquivo: src/pages/Account.jsx

import { useState } from 'react';
import { FiEdit, FiLogOut, FiArrowUp, FiTrash2, FiClock, FiRepeat, FiMove } from 'react-icons/fi';

const Account = () => {
    // 'useState' para controlar qual aba está ativa. Começa com a 'fila'.
    const [activeTab, setActiveTab] = useState('queue');

    // Mock data do usuário (mais detalhado)
    const user = { 
        name: "Tanjiro Kamado", 
        email: "tanjiro@kimetsu.com", 
        avatarUrl: "https://i.pinimg.com/736x/f0/69/cb/f069cb17d3d7175c5e6284f676ab1626.jpg",
        plan: "Plano Seinen", 
        nextBilling: "10/07/2025" 
    };
    const currentRentals = [
        { id: 5, title: "Vagabond Vol. 1", imageUrl: "https://m.media-amazon.com/images/I/912x9s5soiL._AC_UF1000,1000_QL80_.jpg", rentalDays: 15 },
        { id: 6, title: "Vagabond Vol. 2", imageUrl: "https://m.media-amazon.com/images/I/81BBS132MlL._AC_UF1000,1000_QL80_.jpg", rentalDays: 5 },
    ];
    const rentalQueue = [ 
        { id: 7, title: "Goodnight Punpun Vol. 1", imageUrl: "https://m.media-amazon.com/images/I/81A2WSoA5SL._AC_UF1000,1000_QL80_.jpg" }, 
        { id: 8, title: "Vinland Saga Vol. 1", imageUrl: "https://m.media-amazon.com/images/I/9122d5v4p1L._AC_UF1000,1000_QL80_.jpg" },
        { id: 9, title: "20th Century Boys Vol. 1", imageUrl: "https://m.media-amazon.com/images/I/81j1s-52oSL._AC_UF1000,1000_QL80_.jpg" }
    ];
    const rentalHistory = [ { id: 10, title: "Monster Vol. 1" }, { id: 11, title: "Pluto Vol. 3" } ];

    return (
        <main className="bg-(--background-color) font-(--font-family) py-12 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
                    <h1 className="text-4xl font-bold text-(--primary-color)">Minha Conta</h1>
                    <button className="text-(--muted-text-color) hover:text-(--error-color) flex items-center gap-2 text-md transition-colors w-min">
                        <FiLogOut /> Sair da Conta
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Coluna da Esquerda: Perfil e Assinatura (não muda de aba) */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* Card de Perfil */}
                        <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-md text-center">
                            <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-(--secondary-color)" />
                            <h2 className="text-2xl font-bold text-(--primary-color)">{user.name}</h2>
                            <p className="text-(--muted-text-color)">{user.email}</p>
                            <button className="mt-4 text-sm text-(--primary-color) font-semibold flex items-center gap-2 mx-auto"><FiEdit/> Editar Perfil</button>
                        </div>

                        {/* Card de Assinatura */}
                        <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-md">
                            <h2 className="text-2xl font-bold text-(--primary-color) mb-4">Minha Assinatura</h2>
                            <p><strong>Plano Atual:</strong> <span className="font-bold text-(--success-color)">{user.plan}</span></p>
                            <p className="text-sm"><strong>Próxima Cobrança:</strong> {user.nextBilling}</p>
                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 bg-(--primary-color) text-(--surface-color) py-2 rounded-(--border-radius) font-bold text-sm hover:opacity-90 transition-opacity">Gerenciar</button>
                                <button className="flex-1 bg-(--secondary-color) text-(--primary-color) py-2 rounded-(--border-radius) font-bold text-sm hover:bg-yellow-400 transition-colors">Fazer Upgrade</button>
                            </div>
                        </div>
                    </aside>

                    {/* Coluna da Direita: Conteúdo com Abas */}
                    <div className="lg:col-span-2">
                        {/* Botões de Navegação das Abas */}
                        <div className="flex border-b border-(--border-color) mb-6">
                            <button onClick={() => setActiveTab('queue')} className={`px-4 py-2 font-semibold text-lg ${activeTab === 'queue' ? 'border-b-2 border-(--primary-color) text-(--primary-color)' : 'text-(--muted-text-color)'}`}>Minha Fila</button>
                            <button onClick={() => setActiveTab('rented')} className={`px-4 py-2 font-semibold text-lg ${activeTab === 'rented' ? 'border-b-2 border-(--primary-color) text-(--primary-color)' : 'text-(--muted-text-color)'}`}>Comigo Agora</button>
                            <button onClick={() => setActiveTab('history')} className={`px-4 py-2 font-semibold text-lg ${activeTab === 'history' ? 'border-b-2 border-(--primary-color) text-(--primary-color)' : 'text-(--muted-text-color)'}`}>Histórico</button>
                        </div>

                        {/* Conteúdo da Aba Ativa */}
                        <div className="space-y-6">
                            {/* Aba Minha Fila */}
                            {activeTab === 'queue' && (
                                <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-md">
                                    <h2 className="text-xl font-bold text-(--primary-color) mb-4">Sua Fila de Espera ({rentalQueue.length} itens)</h2>
                                    <ul className="space-y-4">
                                        {rentalQueue.map((manga, index) => (
                                            <li key={manga.id} className="flex items-center gap-4 p-2 rounded-(--border-radius) hover:bg-gray-50">
                                                <FiMove className="cursor-grab text-(--muted-text-color)" aria-label="Arraste para reordenar"/>
                                                <span className="font-bold text-(--primary-color)">{index + 1}</span>
                                                <img src={manga.imageUrl} alt={manga.title} className="w-12 h-auto rounded-md"/>
                                                <p className="flex-grow font-semibold">{manga.title}</p>
                                                <button title="Mover para o topo"><FiArrowUp className="text-(--muted-text-color) hover:text-(--success-color)"/></button>
                                                <button title="Remover da fila"><FiTrash2 className="text-(--muted-text-color) hover:text-(--error-color)"/></button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Aba Comigo Agora */}
                            {activeTab === 'rented' && (
                                <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-md">
                                    <h2 className="text-xl font-bold text-(--primary-color) mb-4">Mangás com Você</h2>
                                    {currentRentals.map(manga => (
                                        <div key={manga.id} className="flex flex-col sm:flex-row items-center gap-4 mb-4 p-4 border border-(--border-color) rounded-(--border-radius)">
                                            <img src={manga.imageUrl} alt={manga.title} className="w-20 h-auto rounded-md shadow-md"/>
                                            <div className="flex-grow">
                                                <h3 className="font-bold text-lg">{manga.title}</h3>
                                                <p className="text-sm text-(--muted-text-color)">{30 - manga.rentalDays} dias restantes</p>
                                                <div className="w-full bg-(--border-color) rounded-full h-2.5 mt-2">
                                                    <div className="bg-(--success-color) h-2.5 rounded-full" style={{width: `${((30 - manga.rentalDays) / 30) * 100}%`}}></div>
                                                </div>
                                            </div>
                                            <button className="bg-(--primary-color) text-(--surface-color) py-2 px-4 rounded-(--border-radius) font-bold text-sm">Iniciar Devolução</button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Aba Histórico */}
                            {activeTab === 'history' && (
                                <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-md">
                                    <h2 className="text-xl font-bold text-(--primary-color) mb-4">Seu Histórico de Leitura</h2>
                                     <ul className="space-y-3">
                                        {rentalHistory.map(manga => (
                                            <li key={manga.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-(--border-radius)">
                                                <p>{manga.title}</p>
                                                <button className="text-sm font-semibold text-(--primary-color) flex items-center gap-1"><FiRepeat/> Alugar de Novo</button>
                                            </li>
                                        ))}
                                     </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Account;