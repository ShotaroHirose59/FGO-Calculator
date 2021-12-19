import { getApps, getApp, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore(firebaseApp)

export default db
