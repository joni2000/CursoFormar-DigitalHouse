const express = require('express');
const path = require('path');
const PORT = 3054;

let app = express();

//middlewares
app.use(express.static('public')) //usando el metodo use y express static para usar archivos estaticos

//rutas 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

//server
app.listen(PORT, ()=> console.log(
    `Servidor levantado en el puerto${PORT}
    http://localhost:${PORT}`)
)
