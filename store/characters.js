import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

// Firestoreのデータベースを定義
const db = firebase.firestore()
const charactersRef = db.collection('characters')

export const state = () => ({
  characters: []
})

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('characters', charactersRef)
  })
}

// // デフォルトだとFirestoreのドキュメントID順に表示されてしまうのでソートする
export const getters = {
  orderdCharacters: (state) => {
    /* global _ */
    return _.sortBy(state.characters, 'number')
  }
}
