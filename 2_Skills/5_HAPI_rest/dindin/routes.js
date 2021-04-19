const Recipes = require('./handlers/recipes');
const Users = require('./handlers/users');

const routes = [
    {
        method: 'GET',
        path: '/api/test',
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
        },
        options: {
            auth: 'jwt'
        }
    },
    {
        method: 'POST',
        path: '/api/login',
        options: {
            auth: false
        },
        handler: Users.login
    },
    // USERS
    {
        method: 'POST',
        path: '/api/users',
        handler: Users.insertUser
    },
    // END USERS
    {
        method: 'GET',
        path: '/api/recipes',
        handler: Recipes.viewAllRecipes
    }, // default jwt authorization strategy
    {
        method: 'GET',
        path: '/api/recipes/{id}',
        handler: Recipes.viewRecipeById
    }, // default jwt authorization strategy
    {
        method: 'POST',
        path: '/api/recipes',
        handler: Recipes.createRecipe
    }, // create recipe API is authorized using 'jwt' strategy as default
    {
        method: 'DELETE',
        path: '/api/recipes/{id}',
        handler: Recipes.deleteRecipe
    }, // delete recipe API is authorized using 'jwt' strategy as default
];

module.exports = routes;