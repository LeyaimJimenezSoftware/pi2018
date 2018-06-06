const TeamModelS = require('../models/team_model_sucur'),
    tm = new TeamModelS(); 

class TeamControllerS {
    getAll(req, res, next) {
        tm.getAll((err, data) => {
            if (!err) {
                res.render('index', {
                    title: 'Sucursales',
                    data: data
                }); 
            }
        })
    }

    getOne(req, res, next) {
        let noSucursal= req.params.noSucursal; 
        console.log(noSucursal);

        tm.getOne(noSucursal, (err, data) => {
            if (!err) {
                res.render('edit', { 
                    title: 'Editar Autos',
                    data: data 
                });
            }
        })
    }

      save(req, res, next) {
        let contacto = {
            noSucursal: (req.body.noSucursal || 0),
            nombre: req.body.nombre, 
            domicilio: req.body.domicilio,
           
           
           
        };

        console.log(contacto);
        tm.save(contacto, (err) => {
            if (!err) {
                res.redirect('/');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    delete(req, res, next) {

        let noSucursal = req.params.noSucursal; 
        console.log(noSucursal)

        tm.delete(noSucursal, (err, data) => {
            if (!err) {
                res.redirect('/getAll')
            } else {
                return next(new Error('Registro no encontrado'))
            }
        });
    }

    addForm(req, res, next) {
        res.render('add', { title: 'Agregar Contacto' });
    }

    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';

        res.render('error', { error: err });
    }
}

module.exports = TeamControllerS;