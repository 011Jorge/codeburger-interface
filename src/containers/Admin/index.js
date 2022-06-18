import React from "react"; 

import { Container, ContainerItems } from './styles'
import Orders from './Orders'
import EditProducts from './EditProduct'
import ListProducts from "./ListProducts";
import { SlideMenuAdmin } from "../../components/SlideMenuAdmin";
import PropTypes from 'prop-types'
import paths from "../../constants/paths";
import NewProduct from "./NewProduct";

export function Admin({ match: { path } }){
    return (
        <Container>
            <SlideMenuAdmin path={path} />  
            <ContainerItems>
                {path === paths.Order && <Orders /> }
                {path === paths.ListProducts && <ListProducts /> }
                {path === paths.NewProduct && <NewProduct /> }
                {path === paths.EditProducts && <EditProducts/>}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}