// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoqY0sfPvcJSkl9Se8o8CMb-4NfFWlvpE",
  authDomain: "chat-room-86be3.firebaseapp.com",
  databaseURL: "https://chat-room-86be3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-room-86be3",
  storageBucket: "chat-room-86be3.appspot.com",
  messagingSenderId: "699540162323",
  appId: "1:699540162323:web:6525189a3d3414d096bce6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

var inputName = document.getElementById('input-name');
var inputMessage = document.getElementById('input-message');

var chatRoom = document.getElementById('chat-room');

//get data from firebase when start/refresh the page
firebase.database().ref('chat').child('message').on('child_added', function(snapshot) {
    // console.log(snapshot);
    // console.log(snapshot.val());
    var nameVal = snapshot.val().name; //string
    var msgVal = snapshot.val().msg; //string

    //create element when firebase has a new 'child'
    var chatBox = document.createElement('div');
    chatBox.classList.add('chat-box');

    if (nameVal === "Ash") {
      chatBox.classList.add('self');
    }

    var nameText = document.createElement('h5');
    nameText.innerHTML = nameVal;
    var messageText = document.createElement('p');
    messageText.innerHTML = msgVal;

    chatBox.append(nameText);
    chatBox.append(messageText);

    chatRoom.append(chatBox);

    inputMessage.value = '';
    inputName.value = '';

    chatRoom.scrollTo(0, chatRoom.scrollHeight);
})

function sendMessage() {
    console.log(inputName.value);
    console.log(inputMessage.value);
    var now = new Date();
    console.log(now.toTimeString().substring(0,8));
    console.log(now.toISOString().substring(0,10));

    //push the data and store in database
    firebase.database().ref('chat').child('message').push({
      name:inputName.value,
      msg:inputMessage.value,
    })

    // To create different database for different rooms
    // firebase.database().ref('room').child('room_name').push({
    //   name:inputName.value,
    //   msg:inputMessage.value,
    // })

}