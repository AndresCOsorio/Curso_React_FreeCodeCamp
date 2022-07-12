import './App.css';
import { useState } from 'react';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg';
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
