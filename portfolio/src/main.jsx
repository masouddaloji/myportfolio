
import ReactDOM from 'react-dom/client'
//packages
import {BrowserRouter} from 'react-router-dom'
//components
import App from './App'
//styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter >
    <App />
  </BrowserRouter>
  </React.StrictMode>,
)
