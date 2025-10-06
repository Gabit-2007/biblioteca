import { Navegacao } from '../../routes.jsx';
import { Link } from 'react-router';

export default function Cabecalho() {
    return(
        <div>
            <img src='./assets/logo.png' height={120}/>
            <h1>Livraria Frei</h1>
            <Link>Inicio</Link>
            <Link>Entrar</Link>
        </div>
    );
}