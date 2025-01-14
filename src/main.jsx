import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/global.scss'

import { router } from './router/index.jsx';
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
