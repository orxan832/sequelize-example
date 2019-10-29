const Sequelize = require('sequelize');
const db = require('./db');

const Person = db.define('person', {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  });

  module.exports = Person;