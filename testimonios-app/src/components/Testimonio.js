import '../Stylesheets/Testimonio.css'

export function Testimonio(props) {
  let testimonio = props.testimonio;
  testimonio = testimonio.replace("freeCodeCamp", `${<strong>freeCodeCamp</strong>}`)
  console.log(testimonio);
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        src={require(`../images/${props.imagen}-testimony.png`)}
        alt={`Foto de ${props.nombre}`}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre} </strong>
          en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en
          <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{testimonio}"</p>
      </div>
    </div>
  );
}