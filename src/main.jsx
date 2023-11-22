import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterRedux from './components/CounterRedux.jsx'
import './index.css'
import { store } from "./app/store.js"
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterRedux/>
    </Provider>
  </React.StrictMode>,
)
