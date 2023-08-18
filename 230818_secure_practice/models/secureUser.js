const secureUser = function (sequelize, DataTypes) {
  const model = sequelize.define(
    "secureUser",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pw: {
        type: DataTypes.STRING(255),
        allowNull: false,
        default: null,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
        default: null,
      },
      userid: {
        type: DataTypes.STRING(15),
        allowNull: false,
        default: null,
      },
    },
    {
      tableName: "secureUser",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = secureUser;
