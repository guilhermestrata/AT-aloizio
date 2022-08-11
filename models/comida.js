const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    nome:String,
    data: String,
    status:{type:String,defaut:"0"}
})
const comida = mongoose.model('comida',modelo)

module.exports = comida