import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

// Firestoreのデータベースを定義
const db = firebase.firestore()
const infoRef = db.collection('info').orderBy('created', 'desc')

export const state = () => ({
  info: []
})

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('info', infoRef)
  })
}
