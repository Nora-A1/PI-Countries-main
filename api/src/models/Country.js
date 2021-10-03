const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.UUID,             //id alfanumerico predemitado sequelize           
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,                   //en false no le permito que sea null, campo requerido
      primaryKey:true 
    },

    name:{
      type:DataTypes.STRING,
      allowNull: false,
    },

    flag:{
      type:DataTypes.STRING,
       allowNull: false,
    },

    capital:{
      type:DataTypes.STRING,
      allowNull: true,                        //Antartida no tiene capital, por ej.
    
    continent:{
      type:DataTypes.STRING,
      allowNull: false,
    },

    subregion:{
      type:DataTypes.STRING,
    },

    area:{
      type:DataTypes.FLOAT,
    },

    population:{
      type:DataTypes.INTEGER,
    },

    createdInDb:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
    
    },
    
  });
  
};
