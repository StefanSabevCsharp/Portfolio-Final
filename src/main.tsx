import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../public/css/custom.css"
import "../public/css/tailwind.css"
import "../public/css/vendor/slick.css"
import "../public/css/vendor/jquery.modal.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router'
import "./i18n.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)
