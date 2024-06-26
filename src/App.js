import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar title="Text Utils" about="About" mode="light" toggleMode={() => {}} />
      <div className="container">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text below" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
