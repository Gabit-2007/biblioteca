import './cabecalho.scss';
import { Link } from 'react-router';
import Logo from '../assets/logo.png'

export default function Cabecalho() {
    return(
        <div>
            <img src={ Logo } height={120} alt='Logo'/>
            <p>Livraria Frei</p>
            <Link to={'/'} >Inicio</Link>
        </div>
    );
}