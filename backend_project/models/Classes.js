const { DataTypes } = require("sequelize");

const classModel = (sequelize) => {
  const Clssases = sequelize.define("Classes", {
    id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(31),
      allowNULL: false,
    },
    room: {
      type: DataTypes.STRING(7),
    },
    code: {
      type: DataTypes.STRING(7),
      allowNULL: false,
    },
    teacher_name: {
      type: DataTypes.STRING(15),
    },
  });
  return Clssases;
};

module.exports = classModel;
