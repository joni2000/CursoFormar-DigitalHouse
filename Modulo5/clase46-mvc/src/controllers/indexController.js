let db = require('../database/database.js')



let controller = {
    index: (req, res)=> {
        console.log(db)
    }
 
}

module.exports = controller;