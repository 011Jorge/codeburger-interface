import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'

import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'

import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line, PageLinkExit } from './styles'

export function Header() {
  const { logout } = useUser()
  const { push, location: {pathname} } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} 
          isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink onClick={() => push('/produtos')} 
        isActive={pathname.includes('produtos')}>
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')} >
          <img src={Cart} alt="img-cart" />
        </PageLink> 
        <Line></Line>
        <PageLink>
          <img src={Person} alt="img-person" />
        </PageLink>

        <ContainerText>
          <p>
            Olá, Rodolfo
          </p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>

    </Container>
  )
}
