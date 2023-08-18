"use strict";

//기본 설정
const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//여기까지

//model
//가져오기.
db.secureUser = require("./secureUser")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
