import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqMKz9NvNLTMZ8IdgtU3QO8MvUKOctA0g",
    authDomain: "photogalery-80f33.firebaseapp.com",
    projectId: "photogalery-80f33",
    storageBucket: "photogalery-80f33.appspot.com",
    messagingSenderId: "93185050161",
    appId: "1:93185050161:web:22f7fd0a604487725af710"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
