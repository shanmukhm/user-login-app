module.exports = (sequelize, Sequelize, User) => {
    const DataTypes = Sequelize.DataTypes;
    const Task = sequelize.define('task', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        }
    });

    return Task;
}