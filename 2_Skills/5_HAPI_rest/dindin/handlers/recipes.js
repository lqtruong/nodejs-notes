// require db
const db = require('./../db');

// handlers of the routes
const viewAllRecipes = (req, res) => {
    let sql = 'select * from recipes';
    const params = [];

    if (req.query.cuisine) {
        sql += ' WHERE cuisine = ?';
        params.push(req.query.cuisine);
    }

    return new Promise((resolve, reject) => { // we should use Promise as return in recent hapi version's handlers
        db.all(sql, params, (err, results) => {
            if (err) {
                console.log(err);
                reject(err)
            }
            resolve(res.response(results));
        });
    });

};

const viewRecipeById = (req, res) => {
    return new Promise((resolve, reject) => {
        db.all('select * from recipes where id = ?', [req.params.id], (err, results) => {
            if (err) {
                console.log(err);
                reject(err)
            }
            if (results) {
                resolve(res.response(results));
            } else {
                resolve(res.response('Not found').code(404));
            }
        });
    });
};

const createRecipe = (req, res) => {
    return new Promise((resolve, reject) => {
        resolve(db.run('insert into recipes(name,user_id,cuisine,cooking_time,prep_time,serves,ingredients,directions) values (?,?,?,?,?,?,?,?)', [
            req.payload.name,
            req.payload.user_id,
            req.payload.cuisine,
            req.payload.cooking_time,
            req.payload.prep_time,
            req.payload.serves,
            req.payload.ingredients,
            req.payload.directions
        ], err => {
            reject(err);
        }));
    });
};

const deleteRecipe = (req, res) => {
    return new Promise((resolve, reject) => {
        resolve(db.run('delete from recipes where id=?', [req.params.id]), err => {
            reject(err);
        });
    });
};

module.exports = {
    viewAllRecipes,
    viewRecipeById,
    createRecipe,
    deleteRecipe
}