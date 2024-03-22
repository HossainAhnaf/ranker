
 const firebaseConfig = {
   apiKey: "AIzaSyDfPk48De8a8Yazn8ui1O5fmKLfvvblBjI",
   authDomain: "samer-rank.firebaseapp.com",
   projectId: "samer-rank",
   storageBucket: "samer-rank.appspot.com",
   messagingSenderId: "242738909458",
   appId: "1:242738909458:web:323c9f0e9b6595096323cb",
   measurementId: "G-CM153NRZ4W"
 };

 var app = firebase.initializeApp(firebaseConfig);
 var db = firebase.database()
 firebase.analytics();
//  firebase.auth()