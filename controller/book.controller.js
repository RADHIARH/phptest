const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "node_mysql_crud_db",
  "root",
  "reactjs!nodejs$ingenieurinformatique",
  {
    host: "127.0.0.1",
    dialect: "mysql",
    dialectModule: require("mysql2"),
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const Book = require("../models/book.model");

const getusers = async (req, res) => {
  try {
    const users = await Book.findOne({
      where: {
        id: "1",
      },
    });
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};
module.exports.getusers = getusers;
