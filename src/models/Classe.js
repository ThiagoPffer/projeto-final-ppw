const mongoose = require('../data')

const classeSchema = new mongoose.Schema({
    nome: String,
    status_primario: String,
    alcance: String,
    funcao: String
}, {timestamps: true})

module.exports = mongoose.model('Classe', classeSchema)