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

var user = sessionStorage.getItem('username');
var userName = document.getElementById('user-name');
userName.innerHTML = user;
var inputMessage = document.getElementById('input-message');
var chatRoom = document.getElementById('chat-room');

// var now = new Date();
// console.log(now.toTimeString().substring(0,8));

//get data from firebase when start/refresh the page
firebase.database().ref('chat').child('message').on('child_added', function(snapshot) {
    var nameVal = snapshot.val().name;
    var msgVal = snapshot.val().msg;
    // var timeVal = snapshot.val().time

    //create element when firebase has a new 'child'
    var chatBox = document.createElement('div');
    chatBox.classList.add('chat-box');
    var nameText = document.createElement('h5');
    nameText.classList.add('name-box');

    if (nameVal === sessionStorage.getItem('username')) {
    chatBox.classList.add('self');
    nameText.classList.add('self-name');
    }

    nameText.innerHTML = nameVal;

    var messageText = document.createElement('p');
    messageText.innerHTML = msgVal;

    // var timeStamp = document.createElement('p');
    // timeStamp.classList.add('time');
    // timeStamp.innerHTML = timeVal;

    chatBox.append(messageText);
    // chatBox.append(timeStamp);

    chatRoom.append(nameText);
    chatRoom.append(chatBox);

    chatRoom.scrollTo(0, chatRoom.scrollHeight);
})

function sendMessage() {
    if (inputMessage.value !== '') {
        //push the data and store in database
        firebase.database().ref('chat').child('message').push({
            name:user,
            msg: inputMessage.value,
            // time: now.toTimeString().substring(0,8),
            })
    } else {
        alert('Need to type a message!')
    }

    inputMessage.value = '';
}