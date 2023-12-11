import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from './pages/portal/Portal';
import System from './pages/system/System';
import GlobalStyle from './GlobalStyle';

function App() {
  
  return (
    <>
      <GlobalStyle/>
      <Router basename='sims'>
        <Routes>
          <Route path='/' element={ <Portal/> } />
          <Route path='/system' element={ <System/> } />
        </Routes>
      </Router>
    </>
  );
};

export default App;