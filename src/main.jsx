import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> a605d7a89fc10602d03ce817f6b8e60c90dcc4a9
  </StrictMode>,
)
