let express = require('express')
let app = express()
const PORT = 3009

/* Enrutadores */
let indexRouter = require('./routes/indexRouter')
let marcasRouter = require('./routes/marcasRoutes')

app.use('/', indexRouter)
app.use('/marcas', marcasRouter)


app.listen(PORT, () => console.log("Servidor levantado"))
