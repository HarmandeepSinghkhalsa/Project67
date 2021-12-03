import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCjcY1l_2gPnGWIi8sJOA50Ta0KxviChO8",
    authDomain: "classtest-d8143.firebaseapp.com",
    databaseURL: "https://classtest-d8143-default-rtdb.firebaseio.com",
    projectId: "classtest-d8143",
    storageBucket: "classtest-d8143.appspot.com",
    messagingSenderId: "872923507896",
    appId: "1:872923507896:web:5bf6e5d165e1fe546a984d",
    measurementId: "G-1D7YGE4KSF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();