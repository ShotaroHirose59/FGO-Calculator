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
  add: firestoreAction((context, feedback) => {
    if (feedback) {
      feedbackRef.add({
        feedback,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  })
}
