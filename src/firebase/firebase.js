import firebase from 'firebase';
import 'firebase/storage';

var config = {
  apiKey: "AIzaSyB_JbzIwBkF9hDjubTg_wTeRjyebxEmFGA",
  authDomain: "keen-admin.firebaseapp.com",
  databaseURL: "https://keen-admin.firebaseio.com",
  projectId: "keen-admin",
  storageBucket: "keen-admin.appspot.com",
  messagingSenderId: "915554870329"
};

const fire = firebase.initializeApp(config);


const storage = firebase.storage();


export {
  storage,
  fire as
  default
}