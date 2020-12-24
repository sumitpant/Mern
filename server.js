const express=require('express');
const router=require('./Routes/route')
const cors=require('cors');
const bodyparser=require('body-parser')
const PORT =process.env.PORT||4000
const app=express();
app.use(cors())
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());

app.use(router)

if(process.env.NODE_ENV==='production'){}

app.listen(PORT);