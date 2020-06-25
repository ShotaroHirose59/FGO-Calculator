import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

// Firestoreのデータベースを定義
const db = firebase.firestore()
const feedbackRef = db.collection('feedback')

export const state = () => ({
  feedback: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('feedback', feedbackRef)
  }),
  add: firestoreAction((context, user) => {
    if (user) {
      feedbackRef.add({
        user
      })
    }
  })
}
