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

    //sucursales
    getAllSucursal(cb) { 
        conn.query('SELECT * FROM sucursales', cb); 
    }

    

    getOneSucursal(noSucursal, cb) {
        conn.query('SELECT * FROM sucursales WHERE noSucursal = ?', noSucursal , cb);
         
    }

   
    saveSucursal(data, cb) {
        conn.query('SELECT * FROM sucursales WHERE noSucursal = ?', data.noSucursal, (err, rows) => {
           

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE sucursales SET ? WHERE noSucursal = ?', [data, data.noSucursal], cb)
                    : conn.query('INSERT INTO sucursales SET ?', data,cb);
                 
                   
        });
    }

    

    
    deleteSucursal(noSucursal, cb) {
        conn.query('DELETE FROM sucursales WHERE noSucursal = ?', noSucursal, cb);
    }

    //inventario

    getAllInventario(cb) { 
        conn.query('SELECT * FROM inventariosucursal WHERE Sucursal = 4', cb); 
    }

    

    getOneInventario(idAuto, cb) {
        conn.query('SELECT * FROM inventariosucursal WHERE idAuto = ?', idAuto , cb);
         
    }

   
    saveInventario(data, cb) {
        conn.query('SELECT * FROM inventariosucursal WHERE idAuto = ?', data.idAuto, (err, rows) => {
           

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE inventariosucursal SET ? WHERE idAuto = ?', [data, data.idAuto], cb)
                    : conn.query('INSERT INTO inventariosucursal SET ?', data,cb);
                 
                   
        });
    }

    deleteInventario(idAuto, cb) {
        conn.query('DELETE FROM inventariosucursal WHERE idAuto = ?',idAuto, cb);
    }
  
    //Trabajadores
    getAllTrabajadores(cb) { 
        conn.query('SELECT * FROM trabajadores ', cb); 
    }

    

    getOneTrabajador(idTrabajador, cb) {
        conn.query('SELECT * FROM trabajadores  WHERE idTrabajador = ?', idTrabajador , cb);
         
    }

   
    saveTrabajador(data, cb) {
        conn.query('SELECT * FROM trabajadores  WHERE idTrabajador = ?', data.idTrabajador, (err, rows) => {
           

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE trabajadores  SET ? WHERE idTrabajador = ?', [data, data.idTrabajador], cb)
                    : conn.query('INSERT INTO trabajadores  SET ?', data,cb);
                 
                   
        });
    }

    deleteTrabajador(idTrabajador, cb) {
        conn.query('DELETE FROM trabajadores  WHERE idTrabajador = ?',idTrabajador, cb);
    }

    //ventas

    getAllVentas(cb) { 
        conn.query('SELECT * FROM ventas ', cb); 
    }

    

    getOneVenta(idTrabajador, cb) {
        conn.query('SELECT * FROM ventas WHERE idVenta = ?', idVenta , cb);
         
    }

   
    saveVentas(data, cb) {
        conn.query('SELECT * FROM ventas  WHERE idVenta = ?', data.idVenta, (err, rows) => {
           

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE ventas SET ? WHERE idVenta = ?', [data, data.idVenta], cb)
                    : conn.query('INSERT INTO ventas  SET ?', data,cb);
                 
                   
        });
    }

    deleteVentas(idVenta, cb) {
        conn.query('DELETE FROM ventas  WHERE idVenta = ?',idVenta, cb);
    }


}

module.exports = TeamModel;