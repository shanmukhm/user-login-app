module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;
 const User = sequelize.define('user', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      allowNull: false
    },
    token: {
      type: DataTypes.STRING
    }
  }
  )

  return User;
};