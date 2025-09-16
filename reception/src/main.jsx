import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import ReceptionContextProvider from './context/ReceptionContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <main className='min-h-screen w-screen flex relative'>
    <Auth0Provider
      domain="dev-c7jsal2fs48qtoyj.us.auth0.com"
      clientId="RwB4wNf10iksNXBaPxEWLCuT1j7iD62Y"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <ReceptionContextProvider>
          <Sidebar />
          <App />
        </ReceptionContextProvider>
      </BrowserRouter>
    </Auth0Provider>
  </main>

)
