const Sequelize = require('sequelize');

module.exports = new Sequelize('fayda', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
      },
});