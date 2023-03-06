import { useState } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from './components/Formulario';
import { react } from '@vitejs/plugin-react';


function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
          <Formulario
            setPacientes = {setPacientes}
          />
          <ListadoPacientes/>
      </div>
      
    </div>
  )
}

export default App