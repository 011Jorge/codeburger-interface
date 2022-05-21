import React from "react"; 

import { Container } from './styles'
import Orders from './Orders'
import { SlideMenuAdmin } from "../../components/SlideMenuAdmin";

export function Admin(){
    return (
        <Container>
            <SlideMenuAdmin />
            <Orders />
        </Container>
    )
}