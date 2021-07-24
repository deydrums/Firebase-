import db from './firebase/config';
import {retornaDocumentos} from './helpers/mostrar-documentos';

const usuariosRef = db.collection('usuarios');

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);

let firsDocument:any = null;
let lastDocument:any = null;

btnNext.addEventListener('click',()=>{
    const query = usuariosRef
                    .orderBy('nombre')
                    .startAfter(lastDocument);
    query.limit(2).get().then(snap =>{
        firsDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        retornaDocumentos(snap);
    });
});

btnNext.click();

//Btn Previus
const btnPrev = document.createElement('button');
btnPrev.innerText = 'Prev Page';
document.body.append(btnPrev);

btnPrev.addEventListener('click',()=>{
    const query = usuariosRef
                    .orderBy('nombre')
                    .endBefore(firsDocument);
    query.limitToLast(2).get().then(snap =>{
        firsDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        retornaDocumentos(snap);
    });
});

