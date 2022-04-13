import regeneratorRuntime from "regenerator-runtime";
import * as CRUD from "./js/crud-provider";
// import { obtenerUsers } from "./js/http-provider";
//import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";

// init();

//obtenerUsers().then(console.log)

// CRUD.getUsuario(4).then(console.log)

// CRUD.crearUsuario({
//     name:'Rox',
//     job:'Capintero'
// }).then(console.log)

// CRUD.updateUsuario(1,{
//     name:'Rox',
//     job:'Capintero'
// }).then(console.log)

CRUD.deleteUsuario(1).then(console.log)