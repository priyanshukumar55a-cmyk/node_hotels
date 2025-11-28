const express=require('express');
const router=express.Router();

const Person=require('../models/Person');

//POST method to add person
router.post('/',async(req,res)=>{
    try{
        const data=req.body //request body contains the person data

        //creating a new person document using the mongoose model
        const newPerson=new Person(data);

        //save the new person to the database
        const response=await newPerson.save();
        console.log('Person saved successfully:',response)
        res.status(200).json(response)
    }catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'Internal server error'})
    }
})

//GET method to show person
router.get('/',async(req,res)=>{
    try{
        const response=await Person.find();
        console.log('Persons retrieved successfully:',response)
        res.status(200).json(response)
    }catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'Internal server error'})
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType; //get work type from URL parameter
        if(!['chef','waiter','manager'].includes(workType)){
            return res.status(400).json({error:'Invalid work type'})
        }
        const response=await Person.find({work:workType});
        console.log(`Persons with work type ${workType} retrieved successfully:`,response)
        res.status(200).json(response)
    }catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'Internal server error'})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; //get person id from URL parameter
        const updatedPersonData=req.body; //request body contains the updated data

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true, //Return the updated document
            runValidators:true //Run schema validators on the updated data
        })

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log('Person updated successfully:',response)
        res.status(200).json({message:'Person updated successfully',person:response})
    }
    catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'Internal server error'})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const personID=req.params.id; //get person id from URL parameter
        const response=await Person.findByIdAndDelete(personID);

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log('Person deleted successfully:',response)
        res.status(200).json({message:'Person deleted successfully'})
    }
    catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'Internal server error'})
    }
})

module.exports=router;