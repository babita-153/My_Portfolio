
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.js'
import gsap from 'gsap'
import AppRoutes from './routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(

    <AppRoutes />

)
