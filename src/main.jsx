import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"

import "./index.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
         <GoogleOAuthProvider clientId='808515861896-54usfq2jdt9gpqq3irtoplch3lukkcen.apps.googleusercontent.com'>
            <App />
         </GoogleOAuthProvider> 
      </BrowserRouter>
  </StrictMode>,
)
