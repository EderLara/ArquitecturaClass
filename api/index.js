'use strict';
console.log('Hola mis niños Bienvenidos a su clase de Arquitectura');

// Constantes a usar:
const ex = require('express');
const app = ex();
// Cargamos la libreria de configuración de dotenv:
require('dotenv').config();
const puerto = process.env.PUERTO || 3800;
// Métodos o funciones:
app.listen(puerto,() => {
    console.log('Servidor escuchando en el puerto: '+puerto+' y corriendo desde http://localhost:'+puerto);
    console.log('Variable de entorno usuario = '+process.env.USUARIO);
});
