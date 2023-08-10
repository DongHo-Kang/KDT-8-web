const Login_sequelize = (sequelize, DataTypes) => {
  const login = sequelize.define(
    "login_sequelize",
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
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "login_sequelize",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return login;
};

module.exports = Login_sequelize;
