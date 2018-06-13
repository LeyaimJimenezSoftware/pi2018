const TeamControler = require('../controllers/team_controller'),
    express = require('express'),
    router = express.Router(),
    tc = new TeamControler(); //Instancia en la clase

router
    
    .get('/', tc.index)
    //Autos
    .get('/getAll', tc.getAll)
    .get('/agregar', tc.addForm)
    .get('/editar/:noSerie', tc.getOne)
    .post('/', tc.save)
    .post('/actualizar/:noSerie', tc.save)
    .post('/eliminar/:noSerie', tc.delete)

    //Clientes
    .get('/getAllClientes', tc.getAllClientes)
    .get('/agregarClientes', tc.addFormCliente)
    .get('/editarCliente/:noCliente', tc.getOneC)
    .post('/c', tc.saveC)
    .post('/actualizarCliente/:noCliente', tc.saveC)
    .post('/eliminarCliente/:noCliente', tc.deleteC)

    //Sucursales
    .get('/getAllSucursales', tc.getAllSucursales)
    .get('/agregarSucursal', tc.addFormSucursal)
    .get('/editarSucursales/:noCliente', tc.getOneSucuesal)
    .post('/s', tc.saveSucursal)
    .post('/actualizarSucursal/:noSucursal', tc.saveSucursal)
    .post('/eliminarSucursal/:noSucursal', tc.deleteSucuesal)

    //inventario

    .get('/getAllInventarios', tc.getAllInventario)
    .get('/agregarInventario', tc.addFormInventario)
    .get('/editarInventario/:idAuto', tc.getOneInventario)
    .post('/inve', tc.saveInventario)
    .post('/actualizarInventario/:idAuto', tc.saveInventario)
    .post('/eliminarInventario/:idAuto', tc.deleteInventario)

    //trabajador
    .get('/getAllTrabajadores', tc.getAllTrabajador)
    .get('/agregarTrabajador', tc.addFormTrabajador)
    .get('/editarTrabajador/:idTrabajador', tc.getOneTrabajador)
    .post('/trabajador', tc.saveTrabajador)
    .post('/actualizarTrabajador/:idTrabajador', tc.saveTrabajador)
    .post('/eliminarTrabajaador/:idTrabajador', tc.deleteTrabajador)


    //error
    .use(tc.error404);

module.exports = router;