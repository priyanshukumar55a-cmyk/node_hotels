const express=require('express')
const app=express()
const db=require('./db')
require('dotenv').config();  //for sensitive information

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //req.body
const PORT=process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send('Hello Welcome to my Hostel..., How can I help you to serve?')
})

//importing routes
const personRoutes=require('./routes/personRoutes');
const MenuItemRoutes=require('./routes/MenuItemRoutes');

//using routes
app.use('/person',personRoutes);
app.use('/menuitems',MenuItemRoutes);

app.listen(PORT,()=>{
    console.log('listening on port 3000')
})

