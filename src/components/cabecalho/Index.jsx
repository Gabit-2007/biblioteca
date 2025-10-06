import { Link } from 'react-router';
import Logo from '../../assets/logo.png';
import './styles.scss';


export default function Cabecalho() {
    return(
        <div className='cabecalho'>
        <div>
            <img src={ Logo } height={64} alt='Logo'/>
            <p>Livraria Frei</p>
            <Link to={'/'} >Inicio</Link>
        </div>
        <span></span>
        </div>
    );
}