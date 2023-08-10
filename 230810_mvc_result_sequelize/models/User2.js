const User2 = function (sequelize, DataTypes) {
  const model = sequelize.define(
    "user2",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user2",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = User2;
