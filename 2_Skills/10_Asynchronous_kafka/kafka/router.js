const { Carts, Products } = require('./handlers');

const Routes = [
    {
        path: '/',
        method: 'GET',
        handler: async (req, res) => {
            return 'Hello';
        }
    },
    // Carts
    {
        path: '/carts/{userId}', // get all current items in cart
        method: 'GET',
        handler: Carts.getAllByUser
    },
    {
        path: '/carts',
        method: 'POST',
        handler: Carts.addItem
    },
    {
        path: '/carts/{productId}',
        method: 'DELETE',
        handler: Carts.deleteItem
    },
    // Products
    {
        path: '/products', // get all products in store
        method: 'GET',
        handler: Products.getAll
    },
    {
        path: '/products/{id}', // get product by id
        method: 'GET',
        handler: Products.getById
    },
    {
        path: '/products',
        method: 'POST',
        handler: Products.addProduct
    },
    {
        path: '/products/{id}',
        method: 'DELETE',
        handler: Products.deleteById
    }

];

module.exports = Routes;