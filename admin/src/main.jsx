import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './components/Sidebar.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer } from "react-toastify"
createRoot(document.getElementById('root')).render(
  <main className="min-h-screen bg-zinc-950 min-w-screen flex ">
    <Auth0Provider
      domain="dev-c7jsal2fs48qtoyj.us.auth0.com"
      clientId="xGCcAxz8jnvTIY5zboI318EJhjg7Y27t"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <ToastContainer />
        <AdminContextProvider>
          <Sidebar />
          <App />
        </AdminContextProvider>
      </BrowserRouter>
    </Auth0Provider>
  </main>,
)
