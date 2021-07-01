// const Personagem = require('./models/Personagem');
const Classe = require('./models/Classe');

// const a = new Personagem({
//     nome: "Noctis Lucis",
//     sexo: "Masculino",
//     classe: "Humano",
//     jogo: "Final Fantasy XV"
// });

const a = new Classe({
    nome: "Guerreiro",
    status_primario: "Força",
    alcance: "Curto",
    funcao: "Dano"
});

a.save().then(function(){
    console.log('salvo');
});