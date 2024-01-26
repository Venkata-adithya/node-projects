const moongoose = require('mongoose')

const TaskSchema = new moongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = moongoose.model('Task',TaskSchema)