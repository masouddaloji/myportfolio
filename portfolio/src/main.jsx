
import ReactDOM from 'react-dom/client'
//packages
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
//toast style
import "react-toastify/dist/ReactToastify.css";
//components
import App from './App'
//styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter >
    <App />
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </BrowserRouter>
  </React.StrictMode>,
)
