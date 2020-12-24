const data=require('./connection');

data.find({},(err,data)=>{
    console.log(data)
})
console.log(data)