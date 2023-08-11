"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//모델
db.Student = require("./Students")(sequelize);
db.Classes = require("./Classes")(sequelize);
db.StudentProfile = require("./StudentProfile")(sequelize);

//관계형성
//1:1 학생과 프로핑
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

//1:다 학생과 강의  <= 외래키를 따로 지정안하면 sequelize가 알아서 지정한다.
db.Student.hasMany(db.Classes);
db.Classes.belongsTo(db.Student);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
