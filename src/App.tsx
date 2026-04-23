import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Comunity from "./pages/Comunity";
import Auth from "./pages/Auth";
import CursosEtecPage from "./pages/CursosEtecPage";
import CursoDetalhe from "./pages/CursoDetalhe";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorar" element={<Explore />} />
            <Route path="/comunidade" element={<Comunity />} />
            <Route path="/auth" element={<Auth />} />

            {/* Cursos */}
            <Route path="/cursos" element={<CursosEtecPage />} />
            <Route path="/cursos/:slug" element={<CursoDetalhe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
