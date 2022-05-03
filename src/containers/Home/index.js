import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarousel, OffersCarousel, Header } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <HomeImg src={HomeLogo} alt="home-logo" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
