
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,FacebookAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { app } from "./FirebaseConfig";
// import { resolve } from "path";

let auth = getAuth(app)
let db = getDatabase(app)
export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();



export let fbAuth = () => {
  return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              const uid = user.uid;
              resolve(uid)
          }
          else {
              reject("no user is loged in")
          }
      })
  })
}

export let socialMediaAuth = (provider) => {
    return new Promise((resolve,reject) =>{
       signInWithPopup(auth, provider)
     .then((res) => {
       let id  = res.user;
       resolve("user login successfuly")
     })
     .catch((err) => {
       return err;
     });
 })};

 export let GoogleAuth = (body) => {
  return new Promise((resolve, reject) => {
  
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          // Successful sign-in, you can access user information here
          const user = result.user;
          resolve('Google Sign-In Successful');
          // You can do something with the user data here, like set it in state or dispatch an action
        })
        .catch((error) => {
          // Handle sign-in errors
          const errorCode = error.code;
          const errorMessage = error.message;
          reject('Google Sign-In Error');
        });
    });
  
 
}
