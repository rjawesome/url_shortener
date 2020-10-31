const form = document.getElementById('form')
const helpEl = document.getElementsByClassName('bottom')[0]

let help = false
const toggleHelp = () => {
  helpEl.style.opacity = help ? 0 : 1
  help = !help
}

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

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

form.onsubmit = function (e) {
  e.preventDefault()
  const long = form['long'].value
  const short = form['short'].value

  db.collection('urls')
    .doc(short)
    .set({ long })
    .then(() => {
      alert(`URL Created at https://s.rohanj.dev/${short}`)
      form['long'].value = ''
      form['short'].value = ''
    })
    .catch(() => alert('Short URL Taken'))
}
