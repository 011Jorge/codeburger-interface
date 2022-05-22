import React from "react"; 

import { Container } from './styles'
import Orders from './Orders'
import ListProducts from "./ListProducts";
import { SlideMenuAdmin } from "../../components/SlideMenuAdmin";

export function Admin(){
    return (
        <Container>
            <SlideMenuAdmin />
            {/* <Orders /> */}
            <ListProducts />
        </Container>
    )
}