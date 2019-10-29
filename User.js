const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
    // attributes
    ID: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    FIRSTNAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    LASTNAME: {
      type: Sequelize.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    EMAIL: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    PASSWORD: {
        type: Sequelize.STRING,
        allowNull: false
    }
  });

  module.exports = User;