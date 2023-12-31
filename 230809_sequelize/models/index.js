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

//model값
//const a = requeire('./Visitor')
//const b = a()
db.Visitor = require("./Visitor")(sequelize, Sequelize);
//앞에는 접속정보
//뒤에는 우리가 정의한 것 require("sequelize")

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
