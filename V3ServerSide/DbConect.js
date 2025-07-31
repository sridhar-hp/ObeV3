const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("obe_2", "root", "thirumayil", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Connection failed:", err));

module.exports = sequelize;
