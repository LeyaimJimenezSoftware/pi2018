const conn = require('./model');

class TeamModel {

    //Autos
    getAll(cb) { 
        conn.query('SELECT * FROM autos', cb); 
    }
   
    getOne(noSerie, cb) {
        conn.query('SELECT * FROM autos WHERE noSerie = ?', noSerie, cb);
         
    }

    save(data, cb) {
        conn.query('SELECT * FROM autos WHERE noSerie = ?', data.noSerie, (err, rows) => {
           

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE autos SET ? WHERE noSerie = ?', [data, data.noSerie], cb)
                    : conn.query('INSERT INTO autos SET ?', data,cb);
                 
                   
        });
    }
    insert(data, cb) {
        let sql = ('INSERT INTO autos SET ?',data)
        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
    }

    


    delete(noSerie, cb) {
        conn.query('DELETE FROM autos WHERE noSerie = ?', noSerie, cb);
    }

    //Clientes
    getAllClientes(cb) { 
        conn.query('SELECT * FROM clientes', cb); 
    }

    

    getOneClientes(noCliente, cb) {
        conn.query('SELECT * FROM clientes WHERE noCliente = ?', noCliente, cb);
         
    }

   

    saveCliente(data, cb) {
        conn.query('SELECT * FROM clientes WHERE noCliente = ?', data.noCliente, (err, rows) => {
           

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE clientes SET ? WHERE noCliente = ?', [data, data.noCliente], cb)
                    : conn.query('INSERT INTO clientes SET ?', data,cb);
                 
                   
        });
    }

    insertCliente(data, cb) {
        let sql = ('INSERT INTO clientes SET ?',data)
        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
    }

    


    deleteCliente(noCliente, cb) {
        conn.query('DELETE FROM clientes WHERE noCliente = ?', noCliente, cb);
    }

  
}

module.exports = TeamModel;