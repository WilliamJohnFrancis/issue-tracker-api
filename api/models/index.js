"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

let sequelize;
// This is retrieving and using the environment variables
// It is useful when it comes to seperating out dev / prod / test
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// This is looking through the models directory filterin for all models that aren'y index
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  // Each model that is found is then added to the model export
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

// This will create associations if they exist in the model
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// TODO: Look into these: using the sequelize instance and exporting the Sequelize library. Why would you export the library and not just require it when needed?
// This is exporting the instance of the sequelize DB
db.sequelize = sequelize;
// This is exporting the Sequelize library
db.Sequelize = Sequelize;

module.exports = db;
