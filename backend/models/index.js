const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

(async()=>{
    try {
        let repsonse = await sequelize.authenticate();
        console.log(repsonse)
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
})

module.exports = sequelize;
