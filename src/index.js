import React from 'react'
import ReactDOM from 'react-dom'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
  <>
    <Login />
    <GlobalStyle />
  </>,

  document.getElementById('root')
)
