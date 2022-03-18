import React from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CardContext'
import { Button } from '../Button'
import { Container, Image, ProductsName, ProductsPrice } from './styles'

export function CardProducts({ product }) {
  const { putProductInCart } = useCart()

  return (
    <Container>
      <Image src={product.url} alt="Imagem-do-produto" />
      <div>
        <ProductsName>{product.name}</ProductsName>
        <ProductsPrice>{product.formatedPrice}</ProductsPrice>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
