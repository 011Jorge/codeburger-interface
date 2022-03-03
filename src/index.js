import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
  <>
    <Register />
    <ToastContainer autoClose={2000} />
    <GlobalStyle />
  </>,

  document.getElementById('root')
)
