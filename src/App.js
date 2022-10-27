import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Brain from './Pages/Brain/Brain';
import Login from "./Pages/Login/Login"
import Main from './Pages/Main/Main';
import NoValidRoute from "./Pages/NoValidRoute/NoValidRoute"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Brain />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path="*" element={<NoValidRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
