import firebase from 'firebase/app'
import 'firebase/firestore'


const app =  firebase.initializeApp({
    apiKey: "AIzaSyB3eJLOkrPmSF1xPCC3QmviNNWrI6GPU4s",
    authDomain: "amaqtedu-faa62.firebaseapp.com",
    projectId: "amaqtedu-faa62",
    storageBucket: "amaqtedu-faa62.appspot.com",
    messagingSenderId: "286450980287",
    appId: "1:286450980287:web:341f756eda884481ce3d0a"
  })

  export const getFirebase = () => app
  export const getFirestore = () => firebase.firestore(app)