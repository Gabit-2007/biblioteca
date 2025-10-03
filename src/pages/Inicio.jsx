import Cabecalho from '../components/cabecalho.jsx'
import Rodape from '../components/Rodape.jsx';
import './index.scss'

export default function Inicio(){
    return(
        <div>
        <Cabecalho />
        <div className='main'>
        <p>Seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!</p>
        </div>
        <Rodape />
        </div>
    );
}