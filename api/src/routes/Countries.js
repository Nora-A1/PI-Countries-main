const router = require('express').Router();
const axios = require('axios');
const { Op } = require('sequelize');
const {Country, Activity} = require('../db')


router.get("/", async function (req, res) {   //los paises por nombre
  const {name} = req.query;
  try 
  {
     if (name) {
         const a=await countryname(name) 
          res.json(a)

     } else {
         const c = await creardb()
         res.json(c)
 
     }

  } catch (error) {
       console.log(error)
      
  }
   
})  

router.get("/:id", async function (req, res) {
    const {id}=req.params
    try 
    {
      const b=await Country.findByPk(id)
       res.json(b)

        
    } catch (error) {
         console.log(error)
        
    }
     
  }) 

const countryname = async (name) => {
    
    let res = Country.findAll({
        where:{
            name:{[Op.substring]: name}
        }
    })

    return res;
}
//Precargado de datos
async function dataBase ( ){
   const request = await axios.get("https://restcountries.com/v2/all")
   let allcountries = request.data
   return allcountries;
}
async function creardb ( ){

    var allcountries = await dataBase()
    let p = await Country.findAll()
    if (!p.length) {
        allcountries=allcountries.map(c=>{
            return {
                name:c.name,
                flag:c.flag,
                capital:c.capital,
                continent:c.region, 
                subregion:c.subregion,
                area:c.area,
                population:c.population
            }
        })
       await Country.bulkCreate(allcountries)
    }
    p=await Country.findAll({
        include:Activity

    })
    return p

 }

module.exports=router;
