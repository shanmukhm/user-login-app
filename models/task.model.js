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
        },
        user_id: {
            type: DataTypes.INTEGER,
        
            references: {
              // This is a reference to another model
              model: User,
        
              // This is the column name of the referenced model
              key: 'id',
            }
        }
    });
}