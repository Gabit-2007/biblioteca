import Cabecalho from '../components/cabecalho'
import Rodape from '../components/rodape/Index';
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