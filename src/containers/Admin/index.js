import React from "react"; 

import { Container, ContainerItems } from './styles'
import Orders from './Orders'
import ListProducts from "./ListProducts";
import { SlideMenuAdmin } from "../../components/SlideMenuAdmin";
import PropTypes from 'prop-types'
import paths from "../../constants/paths";

export function Admin({ match: { path } }){
    return (
        <Container>
            <SlideMenuAdmin />  
            <ContainerItems>
                {path === paths.Order && <Orders /> }
                {path === paths.ListProducts && <ListProducts /> }
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}