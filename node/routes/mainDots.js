const express = require('express');
const Joi = require('joi');
const router = express.Router();

const mainDots = [
    { id: 1, name: 'troll: 1'},
    { id: 2, name: 'troll: 2'},
    { id: 3, name: 'troll: 3'},
    { id: 4, name: 'troll: 4'},
];

router.get('/', (req, res) => {
    res.send(mainDots);
});

router.get('/:id', (req, res) => {
    const mainDot = mainDots.find(c => c.id === parseInt(req.params.id));
    if (!mainDot) return res.status(404).send('The mainDots was not found'); // 404
    res.send(mainDot);
});

// post
router.post('/', (req, res) => {
    const { error } = validateMainDot(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const mainDot = {
        id: mainDots.length + 1, 
        name: req.body.name
    };
    mainDots.push(mainDot);
    res.send(mainDot);
});


// update
router.put('/:id', (req, res) => {
    const mainDot = mainDots.find(c => c.id === parseInt(req.params.id));
    if (!mainDot) return res.status(404).send('The mainDot was not found'); 

    const { error } = validateMainDot(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    mainDot.name = req.body.name;

    res.send(mainDot);

});

function validateMainDot(mainDot) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(mainDot, schema);
};


// delete
router.delete('/:id', (req, res) => {
    const mainDot = mainDots.find(c => c.id === parseInt(req.params.id));
    if (!mainDot) return res.status(404).send('The mainDot was not found'); // 404

    const index = mainDots.indexOf(mainDot);
    mainDots.splice(index, 1)

    res.send(mainDot);
});

module.exports = router;