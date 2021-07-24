import db from './firebase/config';

const usuario = {
    nombre: 'Maria',
    activo: true,
    fechaNaci: 0
}

//Insert in to usuarios

// db.collection('usuarios')
//     .add(usuario)
//     .then(docRef =>{
//         console.log(docRef.delete())
//     })
//     .catch(e => console.log('error',e));