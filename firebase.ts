import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDy5dl4jPRNBzruXQtNI2A43BnY16qB4uk',
  authDomain: 'b-day-cards.firebaseapp.com',
  projectId: 'b-day-cards',
  storageBucket: 'b-day-cards.appspot.com',
  messagingSenderId: '657634995681',
  appId: '1:657634995681:web:fb14cf33e1dbcfd2a276a0',
}

export const app = initializeApp(firebaseConfig)
