'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
const {
  dbs: { postgres },
} = require('../../config/env');
const db = {};

let sequelize;

sequelize = new Sequelize(
  postgres.database,
  postgres.username,
  postgres.password,
  {
    host: postgres.host,
    port: postgres.port,
    dialect: postgres.dialect,
    dialectOptions: { ssl: false },
  }
)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize.sync()
// sequelize.sync({ force: true }) 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
