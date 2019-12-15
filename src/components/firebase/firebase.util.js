import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAvtfYwUkamoR5L5D40_Ubf36SMryD0A1o",
    authDomain: "crown-db-d543d.firebaseapp.com",
    databaseURL: "https://crown-db-d543d.firebaseio.com",
    projectId: "crown-db-d543d",
    storageBucket: "crown-db-d543d.appspot.com",
    messagingSenderId: "254739139876",
    appId: "1:254739139876:web:bc8c5e14bc38b3d21177b1",
    measurementId: "G-WXL1V6YESE"
};
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;