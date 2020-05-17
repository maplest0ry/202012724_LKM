const mysql = require('mysql2');

const fs = require('fs');
const config = fs.readFileSync('./model/dbConfig.json'); 
const dbConfig = JSON.parse(config);

const pool = mysql.createPool(dbConfig).promise();

module.exports = pool;