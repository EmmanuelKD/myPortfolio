import firebase from "firebase";
import "firebase/firestore";

const config = {
    // projectId: "myportfolio-5cb5b",
  appId: process.env.REACT_APP_APP_ID,
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};


const fireApp = firebase.initializeApp(config);

export default async function getAllProjects() {
   const fireStore=firebase.firestore(fireApp);
    return  await fireStore.collection("projects").get();

}
