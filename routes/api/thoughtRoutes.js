const router = require('express').Router();

const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts GET all thoughts and CREATE/POST new thought

router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET single thought, UPDATE(PUT) thought, DELETE thought

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions CREATE (POST) new reaction

router.route('/:thoughtId/reactions')
.post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports= router;