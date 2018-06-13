const TeamModel = require('../models/team_model'),
    tm = new TeamModel(); 

class TeamController {

    //Autos
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

   
     index(req,res,next){
        res.render('index');
     }  

    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';

        res.render('error', { error: err });
    }
    //clientes
    getAllClientes(req, res, next) {
        tm.getAllClientes((err, data) => {
            if (!err) {
                res.render('clientes/listC', {  data: data }); 
                
            }
        })
    }

    getOneC(req, res, next) {
        let noCliente = req.params.noCliente; 
        console.log(noCliente);

        tm.getOneClientes(noCliente, (err, data) => {
            if (!err) {
                res.render('clientes/editC', { 
                    
                       data: data 
                });
            }
        })
    }

      saveC(req, res, next) {
        let cliente = {
            noCliente: (req.body.noCliente || 0),
            aPaterno: req.body.aPaterno, 
            aMaterno:req.body.aMaterno, 
            nombres: req.body.nombres,
            domicilio: req.body.domicilio,
            FechaNac: req.body.FechaNac,
            sexo:req.body.sexo,
            sucursalOrigen:req.body.sucursalOrigen
           
           
        };

        console.log(cliente);
        tm.saveCliente(cliente, (err) => {
            if (!err) {
                res.redirect('clientes/listC');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    deleteC(req, res, next) {

        let noCliente = req.params.noCliente; 
        console.log(noCliente)

        tm.deleteCliente(noCliente, (err, data) => {
            if (!err) {
                res.redirect('/getAllClientes')
            } else {
                return next(new Error('Registro no encontrado'))
            }
        });
    }

    addFormCliente(req, res, next) {
        res.render('clientes/addC', { title: 'Agregar Contacto' });
    }

   //sucursales

     getAllSucursales(req, res, next) {
        tm.getAllSucursal((err, data) => {
            if (!err) {
                res.render('Sucursal/listS', {  data: data }); 
                
            }
        })
    }

    getOneSucuesal(req, res, next) {
        let noSucursal = req.params.noSucursal; 
        console.log(noSucursal);

        tm.getOneSucursal(noSucursal, (err, data) => {
            if (!err) {
                res.render('Sucursal/editS', { 
                    
                       data: data 
                });
            }
        })
    }

      saveSucursal(req, res, next) {
        let sucursal = {
            noSucursal: (req.body.noSucursal || 0),
            nombre: req.body.nombre, 
            domicilio:req.body.domicilio 
        
        };

        console.log(sucursal);
        tm.saveSucursal(sucursal, (err) => {
            if (!err) {
                res.redirect('/getAllSucursales');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    deleteSucuesal(req, res, next) {

        let noSucursal = req.params.noSucursal; 
        console.log(noSerie)

        tm.deleteSucursal(noSucursal, (err, data) => {
            if (!err) {
                res.redirect('Sucursal/listS')
            } else {
                return next(new Error('Registro no encontrado'))
            }
        });
    }

    addFormSucursal(req, res, next) {
        res.render('Sucursal/addS', { title: '' });
    }

   //inventario

   getAllInventario(req, res, next) {
    tm.getAllInventario((err, data) => {
        if (!err) {
            res.render('inventario/listInv', {  data: data }); 
            
        }
    })
}

getOneInventario(req, res, next) {
    let idAuto = req.params.idAuto; 
    console.log(idAuto);

    tm.getOneInventario(idAuto, (err, data) => {
        if (!err) {
            res.render('inventario/addInventario', { 
                
                   data: data 
            });
        }
    })
}

  saveInventario(req, res, next) {
    let inventario = {
        idAuto: (req.body.idAuto || 0),
        Auto: req.body.Auto, 
        Sucursal:req.body.Sucursal,
        Color:req.body.Color 
    
    };

    console.log(inventario );
    tm.saveInventario(inventario , (err) => {
        if (!err) {
            res.redirect('/getAllInventarios');
        } else {
            return next(new Error('Registro no salvado'));
        }
    });
}

deleteInventario(req, res, next) {

    let  idAuto = req.params.idAuto; 
    console.log( idAuto)

    tm.deleteInventario( idAuto, (err, data) => {
        if (!err) {
            res.redirect('/getAllInventarios')
        } else {
            return next(new Error('Registro no encontrado'))
        }
    });
}

addFormInventario(req, res, next) {
    res.render('inventario/addInventario', { title: '' });
}

//trabajadores

getAllTrabajador(req, res, next) {
    tm.getAllTrabajadores((err, data) => {
        if (!err) {
            res.render('trabajador/listInv', {  data: data }); 
            
        }
    })
}

getOneTrabajador(req, res, next) {
    let idTrabajador = req.params.idTrabajador; 
    console.log(idTrabajador);

    tm.getOneTrabajador(idTrabajador, (err, data) => {
        if (!err) {
            res.render('inventario/addInventario', { 
                
                   data: data 
            });
        }
    })
}

  saveTrabajador(req, res, next) {
    let trabajador = {
        idTrabajador: (req.body.idTrabajador || 0),
        aPaterno: req.body.aPaterno, 
        aMaterno:req.bod.aMaterno,
        nombres:req.body.nombres,
        tipoTrabajadro:req.body.tipoTrabajadro,
        sucursal:req.body.sucursal,
        idSupervisor:req.body.idSupervisor,
        salario:req.body.salario 
    
    };

    console.log(trabajador );
    tm.saveTrabajador(inventario , (err) => {
        if (!err) {
            res.redirect('/getAllInventarios');
        } else {
            return next(new Error('Registro no salvado'));
        }
    });
}

deleteTrabajador (req, res, next) {

    let  idTrabajador = req.params.idTrabajador; 
    console.log(idTrabajador)

    tm.deleteTrabajador(idTrabajador, (err, data) => {
        if (!err) {
            res.redirect('/getAllInventarios')
        } else {
            return next(new Error('Registro no encontrado'))
        }
    });
}

 addFormTrabajador(req, res, next) {
    res.render('inventario/addInventario', { title: '' });
}

//ventas

getAllVentas(req, res, next) {
    tm.getAllVentas((err, data) => {
        if (!err) {
            res.render('trabajador/listInv', {  data: data }); 
            
        }
    })
}

getOneVentas(req, res, next) {
    let idVenta = req.params.idVenta; 
    console.log(idVenta);

    tm.getOneVenta(idVenta, (err, data) => {
        if (!err) {
            res.render('inventario/addInventario', { 
                
                   data: data 
            });
        }
    })
}

  saveVentas(req, res, next) {
    let ventas = {
        idVenta: (req.body.idVenta || 0),
        Auto: req.body.Auto, 
        Sucursal:req.bod.Sucursal,
        Cliente:req.body.Cliente,
        fechaVenta:req.body.fechaVenta,
        Vendedor:req.body.Vendedor
      
    
    };

    console.log(ventas );
    tm.saveVentas(ventas , (err) => {
        if (!err) {
            res.redirect('/getAllInventarios');
        } else {
            return next(new Error('Registro no salvado'));
        }
    });
}

deleteVentas (req, res, next) {

    let  ventas = req.params.ventas; 
    console.log(ventas)

    tm.deleteVentas(ventas, (err, data) => {
        if (!err) {
            res.redirect('/getAllInventarios')
        } else {
            return next(new Error('Registro no encontrado'))
        }
    });
}

 addFormVentas(req, res, next) {
    res.render('inventario/addInventario', { title: '' });
}

}

module.exports = TeamController;