const mongoose=require("mongoose");

const petSchema=new mongoose.Schema({
    petname:{type:String,required:true},
    breed:{type:String,required:true},
    age:{type:Number,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true}
},{
    versionKey:false
})

const PetModel=mongoose.model("pet",petSchema);
module.exports = {PetModel};