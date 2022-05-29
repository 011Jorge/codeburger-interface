import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FiberNewIcon from '@mui/icons-material/FiberNew';

import paths from '../../constants/paths';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: ShoppingBagIcon
    },
    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.ListProducts,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: FiberNewIcon
    }
]

export default listLinks