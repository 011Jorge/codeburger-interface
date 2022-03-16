import React from 'react'

import PropTypes from 'prop-types'

import Button from '../Button'
import { Container, Image, ProductsName, ProductsPrice } from './styles'

function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="Imagem-do-produto" />
      <div>
        <ProductsName>{product.name}</ProductsName>
        <ProductsPrice>{product.formatedPrice}</ProductsPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  )
}

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}
