import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8VxdYdBKvCFodTou-hyeJPJbnvlYWQJM",
    authDomain: "reto-sodimac.firebaseapp.com",
    databaseURL: "https://reto-sodimac.firebaseio.com",
    projectId: "reto-sodimac",
    storageBucket: "reto-sodimac.appspot.com",
    messagingSenderId: "644459104868",
    appId: "1:644459104868:web:4d0841bb8882f43cc42d71",
    measurementId: "G-FS5LPXB7JW"
}

class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
    }

    Login = (email, pass) => {
        return this.auth.signInWithEmailAndPassword(email, pass)
    }

    createUser = async (name, user, pass)  => {
        await  this.auth.createUserWithEmailAndPassword(user, pass)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })

    }
}

const firebaseService = new Firebase()
const db = firebase.firestore()

export default {
    firebaseService,
    db
}
