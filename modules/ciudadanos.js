//modulo para  la manipulacion del cuidadano
// API REST: GET, PUT, DELETE con Express

// Importamos la conexion , Express,
import express from "express";
import { conx } from "./baseDatos.js";
//listar todos los ciudadanos
export const ciudadano = express();

ciudadano.get("/ciudadano/listarTodos", (rep, res) => {
  // hacer la consulta  en la base de datos
  let sql = "SELECT * FROM  ciudadano ORDER BY apellido";
  //ejecutar la consulta de l base de datos
  conx.query(sql, (err, results, fields) => {
    // console.log(err);
    // console.log(results);
    // console.log(fields);
    res.send(results);
  });
  // devolver la dta en formato json
});

// // modulo para la manipulacion del ciudadano
