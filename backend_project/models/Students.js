const { DataTypes } = require("sequelize");

const studentModel = (sequelize) => {
  const Student = sequelize.define("Student", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(63),
    },
    password: {
      type: DataTypes.STRING(255), //암호화처리 했을 때 길어지니 255로 설정
      allowNull: false,
    },
  });
  return Student;
};

module.exports = studentModel;
