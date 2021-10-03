const router = require('express').Router();
const { Op } = require('sequelize');
const {Country, Activity} = require('../db')



router.post("/", async (req, res, next)=>{

    const {name,dificulty,duration,season} = req.body;

    try 
    {
        let postActivity=await Activity.findOrCreate({
            where:{
                name:name,                                    
                dificulty:dificulty,
                duration:duration,
                season:season

            }})
     res.json(postActivity)
      
    } 
    catch (error) {
        console.log(error);
    }
});


module.exports=router;
