import './App.css';
import ListaTareas from './components/ListaTareas';
import Logo from './components/Logo'


function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;

//Me quede en la parte Tarea completada
