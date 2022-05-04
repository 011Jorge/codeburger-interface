import React from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CardContext'
import { Button } from '../Button'
import { Container, Image, ProductsName, ProductsPrice } from './styles'
import { useHistory } from 'react-router-dom'

export function CardProducts({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  return (
    <Container>
      <Image src={product.url} alt="Imagem-do-produto" />
      <div>
        <ProductsName>{product.name}</ProductsName>
        <ProductsPrice>{product.formatedPrice}</ProductsPrice>
        <Button onClick={() => { 
          putProductInCart(product)
          push('/carrinho')
        }}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
