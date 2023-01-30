const { DataTypes }= require("sequelize");
module.exports= (sequelize)=>{
    sequelize.define('type',{
        // ID: {
        //     type:DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV4,
        //     primarykey: true,
        //     allowNull: false,
        //     unique: true,
        // },
        name: {
            type: DataTypes.STRING,
        },
    },{createdAt: false,
        updateAt: false,
    })
};