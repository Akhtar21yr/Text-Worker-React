import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <>
      <Navbar title="Text Utils" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter your text below" mode={mode} />
        {/* <About /> */}
      </div>
      {/* <Router>
      <Navbar title="Text Utils" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter your text below" mode={mode} />} />
        </Routes>
      </div>
    </Router> */}
    </>
  );
}

export default App;
