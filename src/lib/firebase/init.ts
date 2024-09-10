import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';
import { browser } from '$app/environment';

export let db: Firestore;
export let app: FirebaseApp;
export let auth: Auth;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHs9rhBUb3v1986-A3vcRR7zowjCujK4g",
    authDomain: "botanist-cafe.firebaseapp.com",
    projectId: "botanist-cafe",
    storageBucket: "botanist-cafe.appspot.com",
    messagingSenderId: "249420930993",
    appId: "1:249420930993:web:b06eebb9bc063de39ce790",
};

export async function initializeFirebase() {
    if (!browser) {
        throw new Error("Can't use the Firebase client on the server.");
    }
    if (!app) {
        console.log('initializeFirebase');
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
    }
};