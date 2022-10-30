// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

	apiKey: '',

	authDomain: '',

	databaseURL: '',

	projectId: '',

	storageBucket: '',

	messagingSenderId: '',

	appId: ''

}


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db, firebaseApp }
