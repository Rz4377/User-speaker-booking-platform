require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

console.log(connectionString)

async function createDatabase() {
  await client.connect();
  await client.query('CREATE DATABASE mydatabase');
  await client.end();
  console.log('Database created successfully');
}

createDatabase().catch(console.error);