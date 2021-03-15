// import firebase from '../Firebase'
// import 'firebase/firestore';

import firebase from '../Firebase'


export const logout = () =>  firebase.auth().logout()

export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email,password)

export const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)

export const getFirebaseIdToken = () => firebase.auth().currentUser.getIdToken(false);