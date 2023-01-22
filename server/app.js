const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const  UserRouter =require('../server/routes/userroute')
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/',UserRouter)










app.listen(5000,()=>console.log("server started"))