import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

import  DoctorProvider  from './context/DoctorContext.jsx'

createRoot(document.getElementById('root')).render(

    <DoctorProvider>
      <div className='w-screen min-h-screen relative bg-zinc-950 flex'>
        <Auth0Provider
          domain="dev-c7jsal2fs48qtoyj.us.auth0.com"
          clientId="M5iag7cVy1kAym4rN7Mr9BhoUCEqVikD"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <BrowserRouter>
            <Sidebar />
            <App />
          </BrowserRouter>
        </Auth0Provider>
      </div>
    </DoctorProvider>

)
