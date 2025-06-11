// arquivo: src/pages/Deals.jsx

import { FiCheckCircle } from 'react-icons/fi';

const Deals = () => {
    return (
        <main className="bg-(--background-color) font-(--font-family) py-12">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-(--primary-color)">Nossos Planos</h1>
                <p className="text-xl text-(--muted-text-color) mt-2 max-w-2xl mx-auto">Escolha o plano perfeito para seu ritmo de leitura e comece a economizar hoje!</p>
            
                {/* Tabela de Preços */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                    {/* Plano 1 */}
                    <div className="bg-(--surface-color) p-8 rounded-(--border-radius) shadow-md border-2 border-transparent">
                        <h2 className="text-2xl font-bold text-(--primary-color)">Plano Shounen</h2>
                        <p className="text-4xl font-bold my-4">R$39<span className="text-lg">,90/mês</span></p>
                        <ul className="text-left space-y-3">
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--success-color)"/> 2 volumes por vez</li>
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--success-color)"/> Trocas ilimitadas</li>
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--success-color)"/> Acesso ao catálogo completo</li>
                        </ul>
                        <button className="w-full mt-8 bg-transparent border-2 border-(--primary-color) text-(--primary-color) py-3 rounded-(--border-radius) font-bold hover:bg-(--primary-color) hover:text-(--surface-color) transition-colors">Assinar Agora</button>
                    </div>

                    {/* Plano 2 - Destaque */}
                    <div className="bg-(--primary-color) text-(--surface-color) p-8 rounded-(--border-radius) shadow-lg border-2 border-(--secondary-color) relative transform scale-105">
                        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-(--secondary-color) text-(--primary-color) px-4 py-1 rounded-full text-sm font-bold">MAIS POPULAR</span>
                        <h2 className="text-2xl font-bold">Plano Seinen</h2>
                        <p className="text-4xl font-bold my-4">R$59<span className="text-lg">,90/mês</span></p>
                        <ul className="text-left space-y-3">
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--secondary-color)"/> 4 volumes por vez</li>
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--secondary-color)"/> Prioridade em lançamentos</li>
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--secondary-color)"/> Frete grátis na primeira troca</li>
                        </ul>
                        <button className="w-full mt-8 bg-(--secondary-color) text-(--primary-color) py-3 rounded-(--border-radius) font-bold hover:bg-yellow-400 transition-colors">Assinar Agora</button>
                    </div>

                    {/* Plano 3 */}
                    <div className="bg-(--surface-color) p-8 rounded-(--border-radius) shadow-md border-2 border-transparent">
                        <h2 className="text-2xl font-bold text-(--primary-color)">Plano Otaku</h2>
                        <p className="text-4xl font-bold my-4">R$79<span className="text-lg">,90/mês</span></p>
                        <ul className="text-left space-y-3">
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--success-color)"/> 6 volumes por vez</li>
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--success-color)"/> Mimos e brindes surpresa</li>
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-(--success-color)"/> Acesso a edições especiais</li>
                        </ul>
                        <button className="w-full mt-8 bg-transparent border-2 border-(--primary-color) text-(--primary-color) py-3 rounded-(--border-radius) font-bold hover:bg-(--primary-color) hover:text-(--surface-color) transition-colors">Assinar Agora</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Deals;