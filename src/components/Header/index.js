import React from 'react'

import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'

import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line, PageLinkExit } from './styles'

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
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
