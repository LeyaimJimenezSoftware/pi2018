const conn = require('./model');

class TeamModelS {

    getAll(cb) { 
        conn.query('SELECT * FROM sucursales', cb); 
    }

    getOne(noSucursal, cb) {
        conn.query('SELECT * FROM sucursales WHERE noSucursal = ?', noSucursal, cb);
         
    }

    save(data, cb) {
        conn.query('SELECT * FROM sucursales WHERE noSucursal = ?', data.noSucursal, (err, rows) => {
            console.log(`Numero de registros ${rows.length}`);

            if (!err)
                return (rows.length == 1)
                    ? conn.query('UPDATE sucursales SET ? WHERE noSucursal = ?', [data, data.noSucursal], cb)
                    : conn.query('INSERT INTO sucursales VALUES ?', data,cb);
        });
    }
    


    delete(noSucursal, cb) {
        conn.query('DELETE FROM autos WHERE noSucursal = ?', noSucursal, cb);
    }
}

module.exports = TeamModelS;