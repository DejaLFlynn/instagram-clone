// import firebase from '../Firebase'
// import 'firebase/firestore';

// export const login = (users_name, email)=> 
// firebase.auth().signInWithEmailAndPassword(users_name, email);
// export const signUp = (users_name, email) =>
// firebase.auth().createUserWithEmailAndPassword(users_name, email);
// export const logout = () =>firebase.auth().signOut

// export const firebaseIdToken = () =>
//   firebase.auth().currentUser.getIdToken(false);


import firebase from '../Firebase'


export const logout = () =>  firebase.auth().logout()

export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email,password)

export const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)

export const getFirebaseIdToken = () => firebase.auth().currentUser.getIdToken(false);