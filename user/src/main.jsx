import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import { MenuIcon, X } from 'lucide-react'
import { Auth0Provider } from '@auth0/auth0-react';
import UserContextProvider from './context/UserContext.jsx'

const openSidebar = () => {
  document.getElementById('sidebar').classList.toggle('-translate-x-full')

}
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-c7jsal2fs48qtoyj.us.auth0.com"
    clientId="1DjajXkGeAe2tM1eedKLmWDwJzdlelKJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <UserContextProvider>
        <div className='w-[100vw] md:h-[100vh] min-h-[100vh] relative flex flex-col md:flex-row'>
          <Sidebar />
          <App />
          <div className='w-full h-14 flex items-center justify-end px-5 fixed bottom-5 right-0 md:hidden z-40'>
            <button className='w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center text-white' onClick={openSidebar}><MenuIcon /></button>
          </div>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  </Auth0Provider>


)
