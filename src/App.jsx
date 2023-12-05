import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Portal from './pages/portal/Portal';
import System from './pages/system/System';

function App() {
  
  return (
    <Router basename='sims'>
      <Routes>
        <Route path='/' element={ <Portal/> } />
        <Route path='/system' element={ <System/> } />
      </Routes>
    </Router>
  );
};

export default App;