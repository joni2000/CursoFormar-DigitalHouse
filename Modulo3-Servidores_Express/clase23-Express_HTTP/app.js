let express = require('express')
let app = express()

app.get('/', function(req, res) {
    res.send("Hola Mundo")
})

app.listen(3000, console.log("Servidor levantado"))
