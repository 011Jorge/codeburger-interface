import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import ProductsLogo from '../../assets/products-logo.svg'
import { CardProducts } from '../../components'
import apiCodeBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles'

export function Products( { location: { state } }) {
  let categoryId = 0 
  if(state?.categoryId){
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategories, setActiveCategories] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await apiCodeBurger.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategories === 0) {
      setfilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategories
      )
      setfilteredProducts(newFilteredProducts)
    }
  }, [activeCategories, products])

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="home-logo" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategories === category.id}
              onClick={() => {
                setActiveCategories(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.PropTypes = {
  location: PropTypes.object
}