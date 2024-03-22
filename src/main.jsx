//modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'

import store from './store/index.js'
//lib
import router from './lib/router'
import queryClient from './lib/queryClient'

//css
import './assets/css/app.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
