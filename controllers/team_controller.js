const TeamModel = require('../models/team_model'),
    tm = new TeamModel(); 

class TeamController {
    getAll(req, res, next) {
        tm.getAll((err, data) => {
            if (!err) {
                res.render('list', {  data: data }); 
                
            }
        })
    }

    getOne(req, res, next) {
        let noSerie = req.params.noSerie; 
        console.log(noSerie);

        tm.getOne(noSerie, (err, data) => {
            if (!err) {
                res.render('edit', { 
                    
 data: data 
                });
            }
        })
    }

      save(req, res, next) {
        let contacto = {
            noSerie: (req.body.noSerie || 0),
            Marca: req.body.Marca, 
            Tipo:req.body.Tipo, 
            Transmision: req.body.Transmision,
            Puertas: req.body.Puertas,
            FechaIntroduccion: req.body.FechaIntroduccion
           
           
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

        let noSerie = req.params.noSerie; 
        console.log(noSerie)

        tm.delete(noSerie, (err, data) => {
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

    addv2(req, res, next){
        let contacto = {
            noSerie:(req.body.noSerie),
            Marca:req.body.Marca, 
            Transmision:req.body.Transmision,
            Puertas:req.body.Puertas,
            FechaIntroduccion:req.body.FechaIntroduccion
           
           
        };

        console.log(contacto);
        tm.insert(contacto, (err) => {
            if (!err) {
                res.redirect('/');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

     index(req,res,next){
        res.render('index');
     }  

    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';

        res.render('error', { error: err });
    }
}

module.exports = TeamController;