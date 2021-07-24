import db from './firebase/config';
import {retornaDocumentos} from './helpers/mostrar-documentos';
const usuario = {
    nombre: 'Maria',
    activo: true,
    fechaNaci: 0
}

const usuariosRef = db.collection('usuarios');

//INSERTAR REGISTRO

// db.collection('usuarios')
//     .add(usuario)
//     .then(docRef =>{
//         console.log(docRef.delete())
//     })
//     .catch(e => console.log('error',e));

//ACTUALIZAR REGISTRO

//update 

// usuariosRef
//     .doc('9VAzZUp6ICMFJdS7W0JS')
//     .update({
//         activo: true
//     });

//destructivo

// usuariosRef
// .doc('9VAzZUp6ICMFJdS7W0JS')
// .set({
//     activo: true,
//     edad: 44,
// });


//DELETE REGISTRO WHERE

// usuariosRef
//     .doc('nOJZKQHnLCB3gIj0Lpxt')
//     .delete()
//     .then(() => console.log('Borrado'))
//     .catch(e => console.log('error',e));

//SELECT TODOS LOS USUARIOS

//observable
// usuariosRef
//     .onSnapshot(retornaDocumentos);
    
//promesa
// usuariosRef
//     .get().then(retornaDocumentos);

//CONDICIONES 

// usuariosRef.where('activo','==',true).get().then(retornaDocumentos);
// usuariosRef.where('salario','>',1800).get().then(retornaDocumentos);
// usuariosRef.where('salario','>',1800).where('salario','<',2300).get().then(retornaDocumentos);
usuariosRef.where('salario','>',1800).where('activo','==',true).get().then(retornaDocumentos);
