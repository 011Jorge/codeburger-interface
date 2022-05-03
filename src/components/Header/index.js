import React from 'react'
import { useHistory } from 'react-router-dom'

import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'

import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line, PageLinkExit } from './styles'

export function Header() {
  const { push, location: {pathname} } = useHistory()

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
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>

    </Container>
  )
}
