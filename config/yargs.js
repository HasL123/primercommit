const argv = require('yargs')
    .command('crear', 'Imprime en consola la tabla de multiplicar', {
        descripcion: {
            demand: true,
            alias: 'd'
        },

    })
    .command('actualizar', 'Crea un nuevo archivo', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            default: true,
            alias: 'c'
        }
    })
    .command('listar', 'Crea un nuevo archivo', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('borrar', 'Crea un nuevo archivo', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}