const express=require('express');
const {PetModel}=require("../model/pet.model");
const Petrouter=express.Router();

Petrouter.post("/",async(req,res)=>{
    const {petname,breed,age,name,email}=req.body;
     const pet=await PetModel.findOne({email:req.body.email})
     if(pet){
        res.send({message:"Pet is already registered"})
     }else{
        const newpet=new PetModel({
            petname,
    breed,
    age,
    name,
    email
        })
        await newpet.save();
        res.status(200).send("COngrates you have registered your pet");
     }



})







module.exports={Petrouter};