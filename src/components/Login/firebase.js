import firebase from "firebase/app";
import "firebase/auth";



const firebaseConfig = {
      apiKey: "AIzaSyBGdByohUz7O38x2VoXaKgNvgFRUKMq7dI",
      authDomain: "clone-933c4.firebaseapp.com",
      projectId: "clone-933c4",
      storageBucket: "clone-933c4.appspot.com",
      messagingSenderId: "644646374567",
      appId: "1:644646374567:web:461d29c04fe33f36329f82"
    };

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};