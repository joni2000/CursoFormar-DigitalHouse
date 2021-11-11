let express = require('express'); //requiriendo el modulo express
let path = require('path')

let app = express();

app.listen(3005, () => console.log('servidor levantado')) //levantando servidor con express 


app.get('/un-array', function(req, res){ 
    res.send([1, 2, 3, 4]); //enviando un array de practica
});

app.get('/un-objeto', function(req, res){ 
    res.send({name:'joni'});
});

app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './view/index.html')
    res.sendFile(htmlPath)
})