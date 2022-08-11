const servidor = require('./config/servidor')
const consign = require('consign')
var app = servidor.app
var porta = servidor.porta
consign().include('./routes').into(app)

app.listen(porta,()=>{
    console.log('servidor funcionando em http://localhost:' + porta)
})