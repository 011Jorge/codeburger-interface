import React, { useEffect, useState } from "react";

import apiCodeBurger from "../../../services/api";
import { Container, Img, EditIconStyles } from "./styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import formatCurrency from '../../../utils/formatCurrency'

export function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurger.get("products");

      setProducts(data);
    }
    loadOrders();
  }, []);

  function isOffer(offerStatus) {
    if(offerStatus) {
      <CheckBoxIcon style={{color: 'green'}} />
    } 
    return <CancelIcon style={{color: 'red'}}/>
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell>Editar Prod</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell>
                  <Img src={product.url} align="center" alt="img-produto" />
                </TableCell>
                <TableCell align="center">
                  <EditIconStyles />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ListProducts;
