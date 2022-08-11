const mongoose = require('mongoose')

const conexao = async()=>{
    var atlas = await mongoose.connect('mongodb+srv://userComida:felicidade2233@fiaptecnico.73xj5.mongodb.net/test')
}

module.exports = conexao