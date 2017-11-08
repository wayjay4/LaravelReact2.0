import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCZGuo0AwnrfFzknoNm54dikOE6RPLZTHY",
    authDomain: "goalcoach-9c459.firebaseapp.com",
    databaseURL: "https://goalcoach-9c459.firebaseio.com",
    projectId: "goalcoach-9c459",
    storageBucket: "",
    messagingSenderId: "718768972806"
};

export const firebaseApp = firebase.initializeApp(config);
