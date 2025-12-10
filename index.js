// API REST: GET, PUT, DELETE con Express

// Importamos la librería Express
import express from "express";
import cors from "cors";
import { ciudadano } from "./modules/ciudadanos.js";

// Instanciamos express en un objeto app
const app = express();
app.use(cors());
// Puerto del servidor
const port = 3000;
app.use("/", ciudadano);

// Iniciando el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
