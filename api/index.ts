import { NowRequest, NowResponse } from '@vercel/node'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDBxIk8aYQ8oP4ginC76yam1SsxvF4qQO0',
  authDomain: 'tokyo-concept-138122.firebaseapp.com',
  databaseURL: 'https://tokyo-concept-138122.firebaseio.com',
  projectId: 'tokyo-concept-138122',
  storageBucket: 'tokyo-concept-138122.appspot.com',
  messagingSenderId: '71020311525',
  appId: '1:71020311525:web:ae415fa027c5a3bfd4750c',
  measurementId: 'G-219XTCL4NS',
}

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()

export default async function (req: NowRequest, res: NowResponse) {
  if (!req.query.id) res.redirect('/')
  try {
    const doc = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id
    const result = await db.collection('urls').doc(doc).get()
    res.redirect(result.data().long)
  } catch (e) {
    console.log(e.message)
    res.redirect('/')
  }
}
