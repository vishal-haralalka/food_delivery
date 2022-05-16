const mongoose=require('mongoose')
const db = require('../db')


resSchema = mongoose.Schema({
    RestaurantName:{
        type:String,
        required:true
    },
    
    ContactName:{
        type:String,
        required:true
    },

    Pincode:{
        type:Number,
        required:true
    },
    
    Location:{
        type:String,
        required:true
    },
    Website:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Avg:{
        type:Number,
        default:0,
        required:true
    },
    
    

}, {
    timestamps: true
})

const res = mongoose.model('res',resSchema)

module.exports = res