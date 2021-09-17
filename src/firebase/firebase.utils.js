import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import fireBaseApiKey from './firebaseApiKey';

const firebaseConfig = {
    apiKey: fireBaseApiKey,
    authDomain: "csd-db.firebaseapp.com",
    projectId: "csd-db",
    storageBucket: "csd-db.appspot.com",
    messagingSenderId: "268501751922",
    appId: "1:268501751922:web:866eb940dcf62cd73ecaeb",
    measurementId: "G-ZQ906EH93V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(error);
        }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
