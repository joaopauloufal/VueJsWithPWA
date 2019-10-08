importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js');

var firebaseConfig = {
    messagingSenderId: "97020739860",

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function (payload){
      return self.registration.showNotification({}, {});
  })