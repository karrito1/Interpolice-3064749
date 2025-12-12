import express from "express";
import cors from "cors";
import { ciudadano } from "./modules/ciudadanos.js";
import { usuario } from "./modules/usuarios.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("API Encendida");
});

// Rutas correctamente montadas
app.use("/", ciudadano);
app.use("/", usuario);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
