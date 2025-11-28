const express=require('express');
const router=express.Router();

const MenuItem=require('../models/menu')

//POST method to add menu item
router.post('/',async(req,res)=>{
    try{
        const data=req.body //request body contains the menu item data
        const newMenuItem=new MenuItem(data);
        const response=await newMenuItem.save();
        console.log('Menu item saved successfully:',response)
        res.status(200).json(response)
    }catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'Internal server error'})
    }
})

//GET method to show menu items
router.get('/',async(req,res)=>{
    try{
        const response=await MenuItem.find();
        console.log('Menu items retrieved successfully:',response)
        res.status(200).json(response)
    }catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'Internal server error'})
    }
})

//GET method to show menu items by taste
router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste; //get taste from URL parameter
        if(!['sweet','spicy','sour','bitter','salty'].includes(taste)){
            return res.status(400).json({error:'Invalid taste'})
        }
        const response=await MenuItem.find({taste:taste});
        console.log(`Menu items with taste ${taste} retrieved successfully:`,response)
        res.status(200).json(response)
    }catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'Internal server error'})
    }
})
module.exports=router;