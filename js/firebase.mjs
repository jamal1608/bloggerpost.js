import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js'
import { getStorage, ref , uploadBytes } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJmc_0kwmIR8ttPgg0Ds9orgIJiLyuEoU",
    authDomain: "saylani-projects-3654d.firebaseapp.com",
    projectId: "saylani-projects-3654d",
    storageBucket: "saylani-projects-3654d.appspot.com",
    messagingSenderId: "907118346043",
    appId: "1:907118346043:web:2a3fb4f661a6e7f071411e",
    measurementId: "G-1E0RXMGFN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
  const blogstorageRef = ref(storage, "blogs");







export{
 app, db,
auth, getStorage, ref , uploadBytes, blogstorageRef,

signInWithEmailAndPassword,
createUserWithEmailAndPassword,
getFirestore}

