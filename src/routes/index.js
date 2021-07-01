const express = require('express');
const router = express.Router();
const routes = {
    classes: require('./classes'),
    personagens: require('./personagens')
};

router.use(express.json());

router.use('/classes', routes.classes);
router.use('/personagens', routes.personagens);

module.exports = router;