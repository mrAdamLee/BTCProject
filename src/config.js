import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBV_M8ncb-27qXCRytTAVhlfVIGHR3MO_c",
    authDomain: "btc-app-8ab8b.firebaseapp.com",
    databaseURL: "https://btc-app-8ab8b.firebaseio.com",
    projectId: "btc-app-8ab8b",
    storageBucket: "",
    messagingSenderId: "477697004246",
    appId: "1:477697004246:web:ccf4ba7034c75bee"
}
let app = Firebase.initializeApp(config);
export const db = app.database();