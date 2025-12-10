// modulo base de datos
import mysql from "mysql2";

let conx;

try {
  conx = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "interpolis",
  });

  // Intentar conectarse y manejar errores
  // conx.connect((error) => {
  //   if (error) {
  //     console.error(`Ocurrio un error en la conexion: ${error.message}`);
  //   } else {
  //     console.log("Conexión exitosa a la base de datos");
  //   }
  // });
} catch (error) {
  console.error(`Error inesperado: ${error.message}`);
}

export { conx };
