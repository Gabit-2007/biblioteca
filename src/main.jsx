import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import Navegacao from './routes.jsx';
import './pages/index.scss'
import './components/cabecalho.scss'
import './components/rodape.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
  </StrictMode>,
)
