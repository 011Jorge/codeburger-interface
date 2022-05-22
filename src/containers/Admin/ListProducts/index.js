import React, { useEffect, useState } from 'react'

import apiCodeBurger from '../../../services/api'
import { Container } from './styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function ListProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurger.get('products')

      setProducts(data)
    }
    loadOrders()
  }, [])

  return (
    <Container>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Produto em Oferta</TableCell>
            <TableCell></TableCell>
            <TableCell>Editar Prod</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.offer}</TableCell>
              <TableCell><img src={product.url} alt="img-produto"/></TableCell>
              <TableCell>
                <button></button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default ListProducts