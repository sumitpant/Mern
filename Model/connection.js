const mongoose = require('mongoose');
const modelSchema=require('./ModelLogin')
const uri="mongodb+srv://Sumit:QCba1mVgf2kCNwxh@cluster0.cauj0.mongodb.net/loginuser?retryWrites=true&w=majority"
// ye pura h na  haan yhee h
mongoose.connect(process.env.MONGODB_URI||uri, {useNewUrlParser: true});

const db = mongoose.connection;

const model=mongoose.model('admin',modelSchema.userSchema);
const model2=mongoose.model('reserved',modelSchema.usersSchema)


db.on('error',()=>{console.log("error")});
db.once('open',()=>{
    console.log("connected")//ye console me ajjata tha jb connect hota tha tb to local me dekhta hoga na terminal print hota hoaaa

//  model.find({},(err,data)=>{
//      console.log(data)
//      module.exports=data
//  })

});

module.exports={model:model,
               models:model2
}

