import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;