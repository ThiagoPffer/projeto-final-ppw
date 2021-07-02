const express = require('express');
const router = express.Router();
const Personagem = require('../models/Personagem');
const axios = require('axios');

router.get('/', async (req, res, next) => {
    try{
        let filter = {};
        if(req.query.classe) filter.classe = req.query.classe;
        const limit = Math.min(parseInt(req.query.limit), 100) || 100;
        const skip = parseInt(req.query.skip) || 0;

        let personagem = [];
        personagem = await Personagem.find(filter).limit(limit).skip(skip);
        res.json(personagem);
    } catch (err){
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        let personagem = await Personagem.findById(id).populate('personagem');

        if(!personagem){
            res.statusCode = 404;
            throw new Error("O objeto procurado não foi encontrado");
        }

        if(personagem.classe){
            try{
                var classe = await axios.get('https://pfinalppw2thiago.herokuapp.com/api/classes/'+personagem.classe);
                if (classe.status === 200) {
                    personagem.classe = classe.data.nome;
                }
            } catch (err){
                console.log("Erro desconhecido ao setar propriedade 'classe': " + err);
            }
        }

        if(personagem.jogo){
            try{
                var jogo = await axios.get('https://pfinalppw2.herokuapp.com/api/jogos/'+personagem.jogo);
                if (jogo.status === 200) {
                    personagem.jogo = jogo.data;
                }
            } catch (err){
                console.log("Erro desconhecido ao setar propriedade 'jogo': " + err);
            }
        }

        res.json(personagem);
    } catch (err){
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try{
        const body = req.body;
        const personagem = new Personagem(body);
        await personagem.save();
        res.json(personagem);
    } catch (err){
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try{
        const body = req.body;
        const id = req.params.id;
        var personagem = await Personagem.findByIdAndUpdate(id, body);
        personagem = await Personagem.findById(req.params.id);
        res.json(personagem);
    } catch (err){
        next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const personagem = await Personagem.findByIdAndDelete(id);
        res.json(personagem);
    } catch (err){
        next(err);
    }
})

module.exports = router