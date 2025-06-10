const NotFound = () => {
    return (  
        <main className="bg-(--success-color) text-(--text-color) min-h-screen flex flex-col items-center justify-center font-(--font-family)">
            <img src="/Pagina-Erro.png" alt="Reação engraçada de mangá" className="w-[500px] h-auto mb-6" />
            <h1 className="text-4xl font-bold text-(--primary-color)">Oops! Parece que essa página fugiu... 🏃💨</h1>
            <p className="text-xl text-(--muted-text-color) mt-4">Mas não se preocupe, temos muitos mangás esperando por você!</p>
            <a href="/" className="mt-6 bg-(--secondary-color) text-(--text-color) px-6 py-3 rounded-(--border-radius) text-lg hover:bg-(--warning-color) transition duration-(--transition-duration)">
                Voltar para a Home
            </a>
        </main>
    );
}
 
export default NotFound;
