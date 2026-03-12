import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'

const PUBLISHABLE_KEY = "pk_test_ZW5kbGVzcy1zd2FuLTE5LmNsZXJrLmFjY291bnRzLmRldiQ";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>
)