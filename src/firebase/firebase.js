import firebase from 'firebase';
import 'firebase/auth';

const prodConfig = {
   apiKey: "AIzaSyApycS0QXSwMSErZgcgTem3X0NWIRhxMiU",
   authDomain: "react-notes-aae60.firebaseapp.com",
   databaseURL: "https://react-notes-aae60.firebaseio.com",
   projectId: "react-notes-aae60",
   storageBucket: "react-notes-aae60.appspot.com",
   messagingSenderId: "56448092445"
 };
 const devConfig = {
    apiKey: "AIzaSyApycS0QXSwMSErZgcgTem3X0NWIRhxMiU",
    authDomain: "react-notes-aae60.firebaseapp.com",
    databaseURL: "https://react-notes-aae60.firebaseio.com",
    projectId: "react-notes-aae60",
    storageBucket: "react-notes-aae60.appspot.com",
    messagingSenderId: "56448092445"
  };

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

 if(!firebase.apps.length){
   firebase.initializeApp(config);
 }

const auth = firebase.auth();

export{
  auth,
};
