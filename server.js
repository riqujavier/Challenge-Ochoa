const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./dbConfig'); // Importa el archivo de configuración de MySQL

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + ''));

app.post('/submit-form', (req, res) => {
  // Aquí recibes los datos del formulario enviados desde el cliente
  const { firstName, lastName, email, country, phoneNumber, position } = req.body; 
  
  
  console.log(req.body);

  // Puedes usar la conexión MySQL para almacenar los datos en la base de datos
  const query = 'INSERT INTO registro_personas (firstName, lastName, email, country, phoneNumber, position) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [firstName, lastName, email, country, phoneNumber, position];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al guardar los datos en la base de datos', err);
      return res.status(500).json({ success: false, message: 'Error al guardar los datos' });
    }

    console.log('Datos guardados en la base de datos');
    return res.status(200).json({ success: true, message: 'Datos guardados correctamente' });
  });
});



const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

