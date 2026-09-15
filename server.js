// Servidor minimo. No hace falta tocar nada de este archivo.
// Su unico trabajo es servir los archivos de la carpeta public.

const express = require("express");
const path = require("path");

const app = express();

// Railway asigna el puerto por variable de entorno.
// Si lo cambias por un numero fijo, la app deploya pero la URL no abre.
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`App andando en http://localhost:${PORT}`);
});
