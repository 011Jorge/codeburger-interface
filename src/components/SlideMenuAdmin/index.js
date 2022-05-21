import React from 'react'

import { Container, ItemContainer, Links } from './styles'
import listLinks from './menu-list'

export function SlideMenuAdmin() {
  return (
    <Container>
      <hr />
      {listLinks.map( item => (
        <ItemContainer key={item.id}>
          <item.icon className='icon' />
          <Links to={item.link}>{item.label}</Links>
        </ItemContainer>
      ))}
      <hr />
    </Container>
  ) 
}
