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
      unique: true,
    },
    image:{
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 255},
      allowNull: true,
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 255},
      allowNull: true,
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 255},
      allowNull: true,
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 255},
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 255},
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 255},
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
