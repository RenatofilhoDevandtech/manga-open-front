// arquivo: src/components/utils/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Este componente não renderiza nada visualmente.
// Sua única função é rolar a página para o topo sempre que a URL mudar.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // O efeito é re-executado toda vez que o 'pathname' muda

  return null; // Não renderiza HTML
}