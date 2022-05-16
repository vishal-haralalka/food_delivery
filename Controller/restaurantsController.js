const { response } = require('express')
const resDb=require('../models/resDb')

module.exports.home=(req,res)=>{
                console.log('working')
                    res.render('index')
}

module.exports.restaurants=async(req,res)=>{
    console.log('working')
    const result=await resDb.find({})
    console.log(result)
        res.render('restaurants',{
            rest:result
        })
}

module.exports.form=(req,res)=>{
    console.log('working')
        res.render('form')
}

module.exports.enterRestaurants= async(req,res)=>{
    const rest=await new resDb(req.body)
    await rest.save()
    console.log(rest)
    res.redirect('/restaurants')
}
