import './scss/estilo_login.scss'
import * as bootstrap from 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Formulario_login} from './components/Formulario_login'
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Formulario_login />
    
  </React.StrictMode>,
)
