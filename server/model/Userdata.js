const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/contacts?retryWrites=true&w=majority')
const Schema =mongoose.Schema;

const Userschema= new Schema({
    name:String,
    email:String,
});

var Userdata = mongoose.model('Details',Userschema)
module.exports=Userdata;