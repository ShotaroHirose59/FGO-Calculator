import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

// Firestoreのデータベースを定義
const db = firebase.firestore()
const questionnaireRef = db.collection('questionnaire')

export const state = () => ({
  questionnaire: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('questionnaire', questionnaireRef)
  }),
  add: firestoreAction((context, questionnaire) => {
    if (questionnaire) {
      questionnaireRef.add({
        questionnaire,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  })
}
