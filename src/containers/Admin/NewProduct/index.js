import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";

import { Button } from "../../../components/Button";
import apiCodeBurger from "../../../services/api";
import { Container, Label, Input, LabelUpload } from './styles'
import { useForm } from "react-hook-form";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function NewProduct() {
  const [fileName, setFileName] = useState(null)

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

        <LabelUpload>
          { fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto  
            </>
          )}
          <input 
            type="file" 
            accept="image/png, image/jpeg" 
            {...register("file")}
            onChange={value => {
              setFileName(value.target.files[0].name)
            }}
          />
        </LabelUpload>

        <ReactSelect />

        <Button style={{ 'width': '100%', 'margin-top': '25px'}}>
          Adicionar produtos
        </Button>
      </form>
    </Container>  
  );
}

export default NewProduct;
