import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyChF_m_utVu3zLy-BSymnG9JH7nzIP4La8",
    authDomain: "sql-demos-1fb63.firebaseapp.com",
    projectId: "sql-demos-1fb63",
    storageBucket: "sql-demos-1fb63.appspot.com",
    messagingSenderId: "828536690276",
    appId: "1:828536690276:web:9902704054a0137f547171"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
