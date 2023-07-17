#Proyecto Test-front-backend


Descripción: Este proyecto es una aplicación web que permite el registro de personas el cual se guardaria en un base de datos.

## Requisitos previos
- Node.js
- MySQL

## Instalación
1. Clona el repositorio desde GitHub.

## Configuración
1. Asegurate de tener descargado WAMP. En caso de no tenerlo puedes descargarlo aqui: https://www.wampserver.com/en/ .
2. Una vez instalado y en funcionamiento (veras el icono en la bandeja del sistema de color verde),haz click en el icono de WAMP y abre phpMyAdmin.
3. Ya dentro de phpMyAdmin, aqui podras crear la base de datos y sus tablas.
4. La tabla y sus columnas configuradas en el archivo server.js son :
   registro_personas (firstName, lastName, email, country, phoneNumber, position)
5. Los datos de configuracion actualmente se encuentran en el archivo dbConfig.js y son :
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'registro_inscriptos'
 
  Listo ! ya esta listo para ejecutarse.

## Ejecución
- Para iniciar el servidor, ejecuta: `npm start`
- La aplicación estará disponible en: `http://localhost:3000`
