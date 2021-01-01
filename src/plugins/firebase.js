import firebase from 'firebase'

// Firebaseの初期化に必要なプロジェクトIDをオブジェクト形式で用意
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

// 二重に初期化が行われないようにする
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
