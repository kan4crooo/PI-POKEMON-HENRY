const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primarykey: true,
      allowNull:false,
    },
    image:{
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    defense: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },{createdAt: false,
    updateAt: false,
  })
};
