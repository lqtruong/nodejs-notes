const Recipes = require('./handlers/recipes');

const routes = [
    {
        method: 'GET',
        path: '/api/public',
        handler: (req, res) => {
            return new Promise((resolve, reject) => {
                resolve('public api');
            });
        },
        options: {
            auth: false // disable authorization
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return new Promise((resolve, reject) => {
                resolve(`hello ${req.auth.credentials.user}, welcome to home!`);
            });
        }
    },
    {
        method: 'POST',
        path: '/api/login',
        handler: (req, res) => {
            return new Promise((resolve, reject) => {
                resolve(`hello ${req.auth.credentials.user}, welcome to home!`);
            });
        }
    },
    {
        method: 'GET',
        path: '/api/recipes',
        handler: Recipes.viewAllRecipes
    },
    {
        method: 'GET',
        path: '/api/recipes/{id}',
        handler: Recipes.viewRecipeById
    }, // view recipe APIs are authorized using default strategy for basic header scheme
    {
        method: 'POST',
        path: '/api/recipes',
        handler: Recipes.createRecipe,
        options: {
            auth: 'jwt'
        }
    }, // create recipe API is authorized using 'jwt' strategy with bearer jwt token
    {
        method: 'DELETE',
        path: '/api/recipes/{id}',
        handler: Recipes.deleteRecipe,
        options: {
            auth: 'jwt'
        }
    }, // dete recipe API is authorized using 'jwt' strategy with bearer jwt token
];

module.exports = routes;