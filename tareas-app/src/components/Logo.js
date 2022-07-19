import freeCodeCampLogo from '../images/freeCodeCamp_logo.svg';
import '../stylesheets/Logo.css';

function Logo() {
    return (
        <div className='freecodecamp-logo-contenedor'>
            <img src={freeCodeCampLogo} alt="logo" className='freecodecamp-logo' />
        </div>
    )
}

export default Logo;