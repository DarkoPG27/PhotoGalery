import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyAqMKz9NvNLTMZ8IdgtU3QO8MvUKOctA0g",
    authDomain: "photogalery-80f33.firebaseapp.com",
    projectId: "photogalery-80f33",
    storageBucket: "photogalery-80f33.appspot.com",
    messagingSenderId: "93185050161",
    appId: "1:93185050161:web:22f7fd0a604487725af710"
}

initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();


export { projectStorage, projectFirestore };


