const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'registro_inscriptos',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;