import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCtmQJZx7UQwGtt2T6nfKChHkCPOlkBV5I",
  authDomain: "todoist-clone-f657d.firebaseapp.com",
  databaseURL: "https://todoist-clone-f657d-default-rtdb.firebaseio.com",
  projectId: "todoist-clone-f657d",
  storageBucket: "todoist-clone-f657d.appspot.com",
  messagingSenderId: "163298153384",
  appId: "1:163298153384:web:845bb92f100124e5b4039d"
});

export { firebaseConfig as firebase};