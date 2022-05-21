import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout';

import { useUser } from '../../hooks/UserContext'
import { Container, ItemContainer, Links } from './styles'
import listLinks from './menu-list'

export function SlideMenuAdmin() {
  const { logout } = useUser() 
  return (
    <Container>
      <hr />
      {listLinks.map( item => (
        <ItemContainer key={item.id} isActive={true}>
          <item.icon className='icon' />
          <Links to={item.link}>{item.label}</Links>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer style={{ position: 'absolute', bottom: '30px'}}>
        <LogoutIcon style={{color: '#fff'}} />
        <Links to={"/login"} onClick={logout}>Sair</Links>
      </ItemContainer>
    </Container>
  ) 
}
