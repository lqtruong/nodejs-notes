const siege = require('siege')

siege()
    .on(8080)
    .concurrent(500)
    .for(10000).times
    .get('/')
    .attack()