import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <div className='w-screen min-h-screen relative bg-zinc-950 flex'>
    <BrowserRouter>
      <Sidebar/>
      <App />
    </BrowserRouter>
  </div>

)
