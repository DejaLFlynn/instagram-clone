import firebase from '../Firebase'

export const login = (users_name, email)=> 
firebase.auth().signInWithEmailAndPassword(users_name, email);

export const firebaseIdToken = () =>
  firebase.auth().currentUser.getIdToken(false);


  export const signUp = (users_name, email) =>
  firebase.auth().createUserWithEmailAndPassword(users_name, email);
