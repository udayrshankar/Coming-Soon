import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// 1. Import PostHog
import posthog from 'posthog-js'

// 2. Initialize it (Replace with your Key from PostHog dashboard)
posthog.init('phc_uU45IWF2MvjZhx3f9CmHD847RAtqkErnq4MqUliigAY', {
    api_host: 'https://us.i.posthog.com', // or 'https://eu.i.posthog.com'
    person_profiles: 'always', // Recommended for anonymous users
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
