//modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
import store from './store/index.js'
//components
import App from './App.jsx'
//lib
import router from './lib/router'
import queryClient from './lib/queryClient'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
