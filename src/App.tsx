import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
          
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;