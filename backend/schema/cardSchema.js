const mongoose = require('mongoose');

const resModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please Enter Title Name'],
        maxLength: [25, "titleshould be lessthan 25 charector"],
    },
    catogery: {
        type: String,
        required: [true, 'Please Enter Catogery'],
    },
    imgurl: {
        type: String,
        required: [true, 'Please Enter Image url'],
    },
    desc:{
        type:String,
        required: [true, 'Please Enter Description'],
        maxLength: [70, "descricption should be less than 70 charector"]
    }
})

module.exports = resModel;