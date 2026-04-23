import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Comunity from './pages/Comunity';
import Auth from './pages/Auth';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comunidade" element={<Comunity />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;