// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child,set, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9AL3m1dW_0sOrKQOel_fbvnz9cXVOlXY",
  authDomain: "reactapp-fcbb3.firebaseapp.com",
  projectId: "reactapp-fcbb3",
  storageBucket: "reactapp-fcbb3.appspot.com",
  messagingSenderId: "218555629367",
  appId: "1:218555629367:web:daef54358cb00f9344e4b2",
  measurementId: "G-EZ3CKE8D53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getDatabase(app);
const dbRef = ref(getDatabase(app));
export function signup (email, name,userId){
    return   set(ref(db, 'users/' + userId), {
      name: name,
      email: email,
    userId: userId
    });
}
export function signin (userId){

get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

}