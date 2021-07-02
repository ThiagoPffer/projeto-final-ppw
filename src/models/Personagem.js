const mongoose = require('../data')

const personagemSchema = new mongoose.Schema({
    nome: String,
    sexo : String,
    classe : Object,
    jogo: String
}, {timestamps: true})

module.exports = mongoose.model('Personagem', personagemSchema)