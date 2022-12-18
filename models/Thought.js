const moment = require('moment/moment');
const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type:String, 
            required: true,
            maxLength: 280
        }, 
        createdAt: {
            type: Date, 
            default: Date.now,

        },
        username: {
            type:String, 
            required: true,
        }, 
        reactions:[reactionSchema],

        },
    
)

const reactionSchema = new Schema (
    {

    reactionId: { 
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId(),

    }, 
    reactionBody:{
        type:String, 
        required: true, 
        maxLength: 280,
    }, 

    username: {
        type:String, 
        required: true, 
    }, 
    createdAt: {
        type: Date, 
        default: Date.now, 
        get: createdAtValue => moment(createdAtValue).format(`MM/DD/YY at hh:mm a` ),

    },
},
{ 
    toJSON: {
        virtuals: true, 
        getters: true
    }, 

    id: false,

}

)

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = model ('Thought', thoughtSchema);

module.exports= Thought;
