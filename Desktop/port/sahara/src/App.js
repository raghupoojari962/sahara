
import './App.css';
import Home from './routes/home';
import About from './routes/about';
import Service from './routes/services';
import Contact from './routes/contact';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
  
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
   </Routes>
   </>
  );
}
export default App;