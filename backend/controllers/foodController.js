import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add 
const addFood = async (req,res) =>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


// all food

const listfood = async(req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    }
    catch(error)
    {
        console.log(error)
        res.jason({success:false,message:"Error"})
    }
}

//remove

const removeFood = async(req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    }
    catch(error)
    {
        console.log(error)
        res.json({success:true,message:"Food Removed"})
    }
}
export {addFood,listfood,removeFood}