 const { models } = require('../Model/connection');
const model=require('../Model/connection')

//variables Error

let fieldsEmpty='Empty fields';
let dateError="Date Must Be Greater Or Equal to current date";
let internalError="Some Error Occured"
let success="Registered"
//login authentication
const login=(req,res,next)=>{
    const obj=req.body;

   
    model.model.find({},(err,data)=>{
        
        if(obj.Email===data[0].Email && obj.password==data[0].password){
            res.send(true)
        }
        else{
            res.status(500).send(false)
           
            
        }
    })
   
    
}
//fetch all
const fetchlist=(req,res,next)=>{
    model.models.find({},(err,data)=>{
        res.send(data)
    })
}
//fetching One
const fetchone=(req,res,next)=>{
   
    let number=parseInt(req.params.id)
    
    model.models.findOne({Contact:number},(err,data)=>{
        res.send(data)
    })
}
// updating

const update=(req,res,next)=>{
    
    let contact=req.body.Contact;
    let info =req.body
  let quant= parseInt(req.body.Quantity);
  if(info.Name!=='' && info.Date!=='' && info.Time!=='' && info.Contact!=='' &&info.NoOfPeople!==0){
    if(new Date(info.Date)>new Date()){

        model.models.findOneAndUpdate({Contact:contact},req.body,{new: true},(err,data)=>{
            if(!err){
               // console.log("successfull")//return error msg 
                res.redirect(`http://localhost:3000/error/:${success}`);
                return
            }
            console.log(data)
            res.redirect(`http://localhost:3000/error/:${internalError}`)
            return
        })


    }
    else{
        res.redirect(`http://localhost:3000/error/:${fieldsEmpty}`)
        return
    }
}
    else{
        res.redirect(`http://localhost:3000/error/:${dateError}`)
    }
  
  
   
}
//add new user
const add_new=(req,res,next)=>{

    let info=req.body;
    console.log(new Date(info.Date))
    if(info.Name!=='' && info.Date!=='' && info.Time!=='' && info.Contact!=='' &&info.NoOfPeople!==0){
            if(new Date(info.Date)>new Date()){

                const newuser=new model.models(info);
                newuser.save(err=>{
                    if(!err) {res.redirect("http://localhost:3000/main")}
                    else {
                        res.send(err)
                    }
                })

            }
            else{
                   res.send("date should be greater that today")
            }
    }
    else{
        res.send("Fill all details");
        
    }
    
  
}

//Delete
const deleteUser=(req,res,next)=>{
       let contact=req.params.id.substr(1,);
       model.models.deleteOne({Contact:contact},(err)=>{
           if(err){
               res.send("Some Error Occured");
           }
           else{
               console.log("success")
               res.send("Successful")
           }
       })
}

module.exports={
    login:login,
    fetchlist:fetchlist,
    fetchone:fetchone,
    update:update,
    add_new:add_new,
    deleteUser:deleteUser
}