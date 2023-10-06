const mysql = require("mysql2");



const connection = mysql.createConnection({

  host: "localhost", 
  user: "root", 
  password: 'MYSQL_ROOT_PASSWORD', 
  database: "RueRecup", 

});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données : " + err.message);
  } else {
    console.log("Connecté à la base de données MySQL");
  }
});