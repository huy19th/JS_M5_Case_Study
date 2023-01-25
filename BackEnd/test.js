// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage, ref, listAll } =  require("firebase/storage");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgc7NkjkPRMhenV89NRVpWz94_V_HK1Xs",
  authDomain: "fragments-6246.firebaseapp.com",
  projectId: "fragments-6246",
  storageBucket: "fragments-6246.appspot.com",
  messagingSenderId: "932006964317",
  appId: "1:932006964317:web:3af30710b70e143e7d31b4",
  measurementId: "G-GPPHJRZPL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const songRef = ref(storage, 'song');

async function listFiles(ref) {
    let files = await listAll(ref);
    // console.log(files)
    files.items.forEach(item => {
        console.log(item._location);
    })
}

// listFiles(songRef);

console.log(songRef.getStorage)