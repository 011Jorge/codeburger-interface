import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/ofertas.png'
import api from '../../services/api'
import { Container, CategoryImg, Image, ContainerItems, Button } from './styles'

function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer)
      console.log(onlyOffers)
      setOffers(data)
    }

    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt="logo-da-oferta" />

      <Carousel
        itemsToShow={5}
        style={{ width: '80%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto da categoria" />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <Button>Peça Agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}

export default OffersCarousel
