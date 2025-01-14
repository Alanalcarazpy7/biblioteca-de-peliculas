import './App.scss'
import MenuDescripcion from './pages/menu-descripcion'
import MenuPrincipal from './pages/menu-principal'
import {FetchData} from "./hooks/useApi"
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    FetchData(setDatos);
  }, []);
  
  const [id, setId] = useState(0);

  return (
    <Router basename="/biblioteca-de-peliculas">
      <Routes>
        <Route
          path="/"
          element={<MenuPrincipal datos={datos} setId={setId} />}
        />
        <Route
          path={"/descripcion/:id"}
          element={<MenuDescripcion datos={datos} />}
        />
      </Routes>
    </Router>
  );
}

export default App