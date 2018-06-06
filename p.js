var mysql = require('mysql');

var conn = mysql.createConnection({
    "host": "fgarcia14.tk",
    "user": "leya",
    "password": "pi18",
    "port": 3306,
    "database": "pi18"
});

let data = {
    noSerie: '1010',
    Marca: 'Nissan Pixo',
    Tipo:'suv',
    Transmision: 'Automatica',
    Puertas: '4',
    FechaIntroduccion: '2018-06-06'
};


        

     
    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        conn.query('INSERT INTO autos SET ?', data, (err, rows) => {
       
          if (err) throw err;
          console.log("1 record inserted");
        });
      });