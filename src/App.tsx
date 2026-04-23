import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Comunity from './pages/Comunity';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comunidade" element={<Comunity />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;