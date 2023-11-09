import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/messaging';
import 'firebase/storage';
import firebaseConfigData from './firebase-config';

const firebaseConfig = firebaseConfigData;

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({
  synchronizeTabs: !0
}).catch(() => {
  console.warn("DB offline support not available");
});
export default {
  notificationSupported: firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported()) ? firebase.messaging() : null,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  authw: firebase.auth,
  storage: firebase.storage(),
  functions: firebase.functions()
};