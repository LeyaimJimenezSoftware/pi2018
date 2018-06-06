const app = require('./app'),
    server = app.listen(app.get('port'), () => console.log(`Iniciando API REST-MVS con MySQL desde el puerto ${app.get('port')}`) );