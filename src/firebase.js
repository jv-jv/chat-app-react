import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCf6LtEYM-9uWQS439foLcI49xy6OurWgU",
  authDomain: "chat-app-react-78f1f.firebaseapp.com",
  databaseURL: "https://chat-app-react-78f1f.firebaseio.com",
  projectId: "chat-app-react-78f1f",
  storageBucket: "chat-app-react-78f1f.appspot.com",
  messagingSenderId: "738514404454",
  appId: "1:738514404454:web:50aa61546d67681e28d9a7",
}

firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()

// to delete all items in collection
function deleteAll() {
  database
    .collection("messages")
    .get()
    .then((res) => {
      res.forEach((element) => {
        element.ref.delete()
      })
    })
}

export { database, deleteAll }
