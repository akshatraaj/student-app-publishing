import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBF-1WbkHEMd8e4U5jRAK2JRU9NmnvR9BQ",
    authDomain: "student-attendance-app-60.firebaseapp.com",
    databaseURL: "https://student-attendance-app-60.firebaseio.com",
    projectId: "student-attendance-app-60",
    storageBucket: "student-attendance-app-60.appspot.com",
    messagingSenderId: "399200804295",
    appId: "1:399200804295:web:6989301e5b1c2a07d38de2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();