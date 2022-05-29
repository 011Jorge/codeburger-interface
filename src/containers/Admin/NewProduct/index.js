import React, { useEffect, useState } from "react";

import apiCodeBurger from "../../../services/api";
import { Container } from './styles'

function NewProduct() {
  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurger.get("products");
    }
    loadOrders();
  }, []);

  return (
    <Container>
      <div>Ok</div>
    </Container>
  );
}

export default NewProduct;
