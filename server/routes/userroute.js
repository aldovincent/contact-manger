const express = require('express')
const UserRouter = express.Router()
const Userdata = require('../model/Userdata')


UserRouter.post('/add', function (req, res) {
    console.log(req);
    var item = {
        name: req.body.username,
        email: req.body.email,
    }
    console.log(item);
    Userdata(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:"user added"
            })

        }
    })

})


UserRouter.get('/view/', function (req, res) {

    Userdata.find().then((data)=>{
        console.log(data);
        if(data){
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
               
            })
        }
       
    })

})

UserRouter.get('/delete/:name', function (req,res){
const id = req.params.name
Userdata.findByIdAndDelete({_id:id}).then((response)=>{
    return res.status(200).json({
        details: response,
        success: true,
        error: false,       
    })
}).catch((err)=>{
    return res.status(400).json({
        details: err,
        success: true,
        error: false,       
    })
})
})


module.exports=UserRouter