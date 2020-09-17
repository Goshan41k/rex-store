import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDS5PhB7YwIxONS5wyDBuRZHBtYNrfEgkI',
  authDomain: 'se-test-task.firebaseapp.com',
  databaseURL: 'https://se-test-task.firebaseio.com',
  projectId: 'se-test-task',
  storageBucket: 'se-test-task.appspot.com',
  messagingSenderId: '995663748175',
  appId: '1:995663748175:web:516379c50d71d2f776de3a',
};

const firebaseAPI = firebase.initializeApp(firebaseConfig);

export default firebaseAPI;
