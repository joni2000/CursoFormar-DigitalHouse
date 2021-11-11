const EXPRESS = require('express'); //requiero express 
let app = EXPRESS();// Ejecuto express
const PORT = 3001;  
let path = require('path')
app.use(EXPRESS.static('public'))

app.get('/', (req, res) => { //recibe como parametros los objetos req y res
    res.sendFile(path.join(__dirname, '/view/index.html'))
})

app.get('/contact', (req, res) => { //recibe como parametros los objetos req y res
    res.sendFile(path.join(__dirname, '/view/contact.html')) //usando el metodo join del modulo path para enviar un archivo a la pagina
})

app.get('/about', (req, res) => {
    res.send('welcome this about Us') //envia lo que esta entre ( ) al navegador 
})


app.listen(PORT, () => //recibe dos parametros el numero de puerto y un callback0
    console.log(`Servidor levantado en el puerto${PORT}
    http://localhost:${PORT}
`))
