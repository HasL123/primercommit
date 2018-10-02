const fs = require('fs');


let listadoPorHacer = [];

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (index.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = index;
        guardarDB();
        return true;
    }


}


const getListado = () => {

    listadoPorHacer = require('../db/data.json');
    return listadoPorHacer;

}
const actualizar = (descripcion, completado = true) => {
    cargarDB();

    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });
    // o
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const guardarDB = (descripcion) => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) throw new Error('valio madre pancho');
        else {
            return (`todo bien`);
        }
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];

    }


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;




}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}