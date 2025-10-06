import Cabecalho from '../components/cabecalho'
import Rodape from '../components/rodape'
import Cartao from '../components/cartao/Index.jsx'
import './index.scss'

export default function Inicio(){
    return(
        <div>
        <Cabecalho />
        <div className='main'>
        <p>Seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!</p>
        </div>
        <Cartao
        imagem="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.metropoles.com%2Fzip%2Fpor-que-historias-com-muitos-super-herois-sao-uma-droga&psig=AOvVaw3DgrdsbgHrmGKnxCIImAB6&ust=1759872314760000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMC69K3BkJADFQAAAAAdAAAAABAE"
        titulo="Livros de super heróis"
        descricao="Em nossa livraria você vai encontrar livros de diversos heróis da atualidade!"
        />
        <Cartao
        imagem="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.metropoles.com%2Fzip%2Fpor-que-historias-com-muitos-super-herois-sao-uma-droga&psig=AOvVaw3DgrdsbgHrmGKnxCIImAB6&ust=1759872314760000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMC69K3BkJADFQAAAAAdAAAAABAE"
        titulo="Livros de super heróis"
        descricao="Em nossa livraria você vai encontrar livros de diversos heróis da atualidade!"
        inverter
        />
        <Rodape />
        </div>
    );
}