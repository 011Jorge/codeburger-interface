import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types'
import { useUser } from '../../hooks/UserContext'
import { Container, ItemContainer, Links } from './styles'
import listLinks from './menu-list'

export function SlideMenuAdmin({ path }) {
  const { logout } = useUser() 
  return (
    <Container>
      <hr />
      {listLinks.map( item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className='icon' />
          <Links to={item.link}>{item.label}</Links>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer style={{ position: 'fixed', bottom: '30px'}}>
        <LogoutIcon style={{color: '#fff'}} />
        <Links to={"/login"} onClick={logout}>Sair</Links>
      </ItemContainer>
    </Container>
  ) 
}


SlideMenuAdmin.propTypes = {
  path: PropTypes.string
}