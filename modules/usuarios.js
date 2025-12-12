// modulo para  la manipulacion del cuidadano
// API REST: GET, PUT, DELETE con Express

// Importamos la conexion , Express,
import express from "express";
import { conx } from "./baseDatos.js";
//listar todos los ciudadanos
export const usuario = express.Router();
usuario.get("/usuario/listartodos", (req, res) => {
  // hacer la consulta  en la base de datos
  let sql = "SELECT * FROM  usuario ORDER BY apellidos";
  //ejecutar la consulta de l base de datos
  conx.query(sql, (err, results, fields) => {
    res.send(results);
  });
  // devolver la dta en formato json
});

usuario.get("/usuario/listarid/:id", (req, res) => {
  let id = req.params.id;
  // hacer la consulta  en la base de datos
  let sql = "SELECT * FROM  usuario  where id=?";
  //ejecutar la consulta de l base de datos
  conx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

// modulo para la manipulacion del ciudadano

// borrado real
usuario.delete("/usuario/borrarid/:id", (req, res) => {
  let id = req.params.id;
  // hacer la consulta  en la base de datos
  let sql = "DELETE  FROM  usuario  where id=?";
  //ejecutar la consulta de l base de datos
  conx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});
usuario.post("/usuario/crear", (req, res) => {
  // recibmos los parammetros enviqdos en una consulta-payload en obejtco jjavascript
  let datosFormulario = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    Email: req.body.Email,
    password: req.body.password,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };
  // hacer la consulta  en la base de datos
  let sql = "insert into usuario set ? ";
  //ejecutar la consulta de l base de datos
  conx.query(sql, [datosFormulario], (err, results, fields) => {
    res.status(200).send({ results });
  });
});
usuario.put("/usuario/editar/:id", (req, res) => {
  let id = req.params.id;
  let datosFormulario = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    Email: req.body.Email,
    password: req.body.password,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };
  // hacer la consulta  en la base de datos
  let sql = "update usuario set ?   where id= ? ";
  //ejecutar la consulta de l base de datos
  conx.query(sql, [datosFormulario, id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});
