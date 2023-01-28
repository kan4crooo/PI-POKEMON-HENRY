const { DataTypes }= require("sequelize");
module.exports= (sequelize)=>{
    sequelize.define('type',{
        ID: {
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primarykey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },{createdAt: false,
        updateAt: false,
    })
};