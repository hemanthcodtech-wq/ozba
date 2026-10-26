import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import logo from './assets/logo.png'
import './index.css'
import App from './App.jsx'

const organizationSchema = document.querySelector('script[type="application/ld+json"]')
if (organizationSchema) {
  const schema = JSON.parse(organizationSchema.textContent)
  schema.logo = new URL(logo, window.location.origin).href
  organizationSchema.textContent = JSON.stringify(schema)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
