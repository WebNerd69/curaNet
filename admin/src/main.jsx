import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './components/Sidebar.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <main className="min-h-screen bg-zinc-950 min-w-screen flex ">
    <BrowserRouter>
      <Sidebar />
      <AdminContextProvider>
        <App />
      </AdminContextProvider>
    </BrowserRouter>
  </main>,
)
