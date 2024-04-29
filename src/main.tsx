import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './application.tsx'
import 'reactflow/dist/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datasheet-grid/dist/style.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
