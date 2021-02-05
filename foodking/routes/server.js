const express = require('express')
const app = express()
const ejs =require('ejs')
const path =require('path')
const expressLayout = require('express-ejs-layouts')

const port = 3000

app.get('/', (req, res) =>{
     res.render('home')
})


 
app.use(expressLayout)
app.use('views',path.join(_dirname,'/resources/views'))
app.set('view engine', 'ejs')

app.listen(port , () => console.log(`Listening on port ${port}`))
