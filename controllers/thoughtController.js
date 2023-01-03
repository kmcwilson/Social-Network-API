const { User, Thought } = require('../models');

module.exports = {
    //GET all thoughts

    getThoughts(req, res) {
        Thought.find({})
            .select('-__v')
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // GET single thought using id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with this ID" })
                    : res.json(thought)
            )
    },
    //Create a new thought using id
    createThought(req, res) {
        Thought.create(req.body)
            .then(({_id}) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "Thought created, but found not user with that Id!" })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },
    //UPDATE a thought using the id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with this ID!" })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },

    //DELETE a thought using the id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with this ID!" })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: "Thought deleted but no user with this id!",
                    })
                    : res.json({ message: "Thought successfully deleted!" })
            )
            .catch((err) => res.status(500).json(err));
    },

    //CREATE a reaction that is stored in a single thought's reaction array
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with this ID!" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //DELETE a reaction to by pulling it using the reactionId value
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with this ID!" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

};