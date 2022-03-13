import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import apiCodeBurger from '../../services/api'
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoriesMenu
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategories, setActiveCategories] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()
  }, [])
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
    </Container>
  )
}

export default Products
