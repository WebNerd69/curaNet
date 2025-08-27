import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import ReceptionContextProvider from './context/ReceptionContext.jsx'


createRoot(document.getElementById('root')).render(
  <main className='min-h-screen w-screen flex relative'>
    <BrowserRouter>
      <ReceptionContextProvider>
        <Sidebar />
        <App />
      </ReceptionContextProvider>
    </BrowserRouter>

  </main>

)
