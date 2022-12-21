const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "sql9585874",
  "sql9585874",
  "edD9SdHpnU",
  {
    host: "sql9.freesqldatabase.com",
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
