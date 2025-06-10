const Home = () => {
    return (
        <main className="bg-(--background-color) text-(--text-color) min-h-screen flex flex-col items-center font-(--font-family)">
            {/* Banner de boas-vindas com efeito radial */}
            <section className="relative w-full h-[80vh] flex items-center justify-center">
                <div className="absolute inset-0 mask-radial-farthest-corner mask-radial-from-100% mask-radial-at-[30%_30%] bg-[url('src/assets/Banner.png')] bg-cover bg-center"></div>

                {/* Conteúdo sobreposto */}
                <div className="relative z-10 text-center p-6 bg-[rgba(0,0,0,0.6)] rounded-(--border-radius) shadow-(--shadow-md)">
                    <h1 className="text-5xl font-bold text-(--surface-color)">Entre no Mundo dos Mangás!</h1>
                    <p className="text-xl text-(--muted-text-color) mt-4 max-w-2xl mx-auto">
                        Descubra histórias incríveis, personagens inesquecíveis e mergulhe na cultura japonesa!
                    </p>
                    <button className="bg-(--secondary-color) text-(--text-color) mt-6 px-6 py-3 rounded-(--border-radius) text-lg flex items-center gap-2 hover:bg-(--warning-color) transition duration-(--transition-duration) shadow-(--shadow-md)">
                        Explorar Mangás Agora
                    </button>
                </div>
            </section>

            {/* Seção de Destaques */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-12">
                <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-(--shadow-sm) text-center border border-(--border-color)">
                    <h2 className="text-3xl font-bold text-(--primary-color)">🔥 Mangás Populares</h2>
                    <p className="text-lg text-(--muted-text-color)">Veja quais títulos estão dominando o Japão!</p>
                    <button className="bg-(--accent-color) text-(--surface-color) mt-4 px-5 py-2 rounded-(--border-radius) text-lg hover:bg-(--error-color) transition duration-(--transition-duration)">
                        Explorar Catálogo
                    </button>
                </div>
                <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-(--shadow-sm) text-center border border-(--border-color)">
                    <h2 className="text-3xl font-bold text-(--primary-color)">💰 Ofertas e Promoções</h2>
                    <p className="text-lg text-(--muted-text-color)">Aproveite descontos exclusivos para assinantes!</p>
                    <button className="bg-(--success-color) text-(--surface-color) mt-4 px-5 py-2 rounded-(--border-radius) text-lg hover:bg-(--warning-color) transition duration-(--transition-duration)">
                        Ver Ofertas
                    </button>
                </div>
            </section>

            {/* Benefícios do Serviço */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-10">
                <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-(--shadow-sm) text-center border border-(--border-color)">
                    <h2 className="text-2xl font-bold text-(--primary-color)">🚀 Entrega Rápida</h2>
                    <p className="text-(--muted-text-color)">Receba seus mangás em poucos dias, sem demora!</p>
                </div>
                <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-(--shadow-sm) text-center border border-(--border-color)">
                    <h2 className="text-2xl font-bold text-(--primary-color)">💰 Preços Incríveis</h2>
                    <p className="text-(--muted-text-color)">Assinaturas acessíveis e promoções semanais garantem economia.</p>
                </div>
                <div className="bg-(--surface-color) p-6 rounded-(--border-radius) shadow-(--shadow-sm) text-center border border-(--border-color)">
                    <h2 className="text-2xl font-bold text-(--primary-color)">🔥 Catálogo Premium</h2>
                    <p className="text-(--muted-text-color)">Os mangás mais lidos do Japão e lançamentos imperdíveis!</p>
                </div>
            </section>
        </main>
    );
}

export default Home;
