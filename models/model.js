const mysql = require('mysql'),
    conf = require('./db_conf'),
    dbOptions = {
        host: conf.mysql.host,
        user: conf.mysql.user,
        password: conf.mysql.password,
        port: conf.mysql.port,
        database: conf.mysql.db 
    },

    conn = mysql.createConnection(dbOptions);

conn.connect( (err) => {
    return (err)
        // True
        ? console.log(`Error al conectarse a la base de datos: ${err.starck}`)
        // False
        : console.log(`Conexión establecida con la base de datos N°: ${conn.threadId}`);
});

module.exports = conn;