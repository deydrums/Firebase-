import db from './firebase/config';

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

usuariosRef
    .onSnapshot(snap => {
        const usuarios:any = [];
        snap.forEach(snapHijo =>{
            usuarios.push({
                id: snapHijo.id,
                ...snapHijo.data()
            });
        });
        console.log(usuarios);
    });
    