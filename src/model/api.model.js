const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    id:{type: Number},
    name:{type: String, required:true},
    email: {type: String, required:true}
},{
    versionKey:false,
    timestamps: true
})
module.exports = mongoose.model("api", apiSchema)


//testing...
