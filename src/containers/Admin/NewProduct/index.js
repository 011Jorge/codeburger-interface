import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";

import { Button } from "../../../components/Button";
import apiCodeBurger from "../../../services/api";
import { Container, Label, Input } from './styles'
import { useForm } from "react-hook-form";

function NewProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurger.get("products");
    }
    loadOrders();
  }, []);

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register("name")}/>

        <Label>Preço</Label>
        <Input type="number" {...register("price")}/>

        <Label>Upload da Imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <Button style={{ 'width': '100%', 'margin-top': '25px'}}>
          Adicionar produtos
        </Button>
      </form>
    </Container>  
  );
}

export default NewProduct;
