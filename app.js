const express = require('express')
const app=express()  
const ejs = require('ejs')
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const restaurantRouter=require('./routes/restaurants')
const db=require('./db')


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/public', express.static('public'));


app.set('view engine','ejs')
app.set('views','./views')

const port=process.env.PORT || 3000

app.use(restaurantRouter)

app.listen(port,()=>{
    console.log('connected to server');

}

)



