const express = require('express');
const router = express.Router();
const Classe = require('../models/Classe');

router.get('/', async (req, res, next) => {
    try{
        let filter = {};
        if(req.query.alcance) filter.alcance = req.query.alcance;
        const limit = Math.min(parseInt(req.query.limit), 100) || 100;
        const skip = parseInt(req.query.skip) || 0;

        let classe = [];
        classe = await Classe.find(filter).limit(limit).skip(skip);
        res.json(classe);
    } catch (err){
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        let classe = await Classe.findById(id).populate('classe');
        if(!classe){
            res.statusCode = 404;
            throw new Error("O objeto procurado não foi encontrado");
        }
        res.json(classe);
    } catch (err){
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try{
        const body = req.body;
        const classe = new Classe(body);
        await classe.save();
        res.json(classe);
    } catch (err){
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try{
        const body = req.body;
        const id = req.params.id;
        var classe = await Classe.findByIdAndUpdate(id, body);
        classe = await Classe.findById(req.params.id);
        res.json(classe);
    } catch (err){
        next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const classe = await Classe.findByIdAndDelete(id);
        res.json(classe);
    } catch (err){
        next(err);
    }
})

module.exports = router