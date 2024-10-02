// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import teachersData from './teachers.json' assert { type: 'json' };

// // const firebaseConfig = {
// //   apiKey: "your-api-key",
// //   authDomain: "your-auth-domain",
// //   projectId: "your-project-id",
// //   storageBucket: "your-storage-bucket",
// //   messagingSenderId: "your-messaging-sender-id",
// //   appId: "your-app-id"
// // };
// const firebaseConfig = {
//   apiKey: 'AIzaSyAIlazu4Sblp94V22l0X-SOi1gvNsYitBc',
//   authDomain: 'lingua-tutors-b3db9.firebaseapp.com',
//   projectId: 'lingua-tutors-b3db9',
//   storageBucket: 'lingua-tutors-b3db9.appspot.com',
//   messagingSenderId: '606262167521',
//   appId: '1:606262167521:web:eb6a5330b67b80533f74a0',
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const uploadTeachersData = async () => {
//   const teachersCollection = collection(db, 'teachers');
//   for (const teacher of teachersData) {
//     try {
//       await addDoc(teachersCollection, teacher);
//       console.log(`Teacher ${teacher.name} uploaded successfully`);
//     } catch (e) {
//       console.error('Error adding document: ', e);
//     }
//   }
// };

// uploadTeachersData();
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import teachersData from './teachers.json' assert { type: 'json' };

const firebaseConfig = {
  apiKey: 'AIzaSyAIlazu4Sblp94V22l0X-SOi1gvNsYitBc',
  authDomain: 'lingua-tutors-b3db9.firebaseapp.com',
  projectId: 'lingua-tutors-b3db9',
  storageBucket: 'lingua-tutors-b3db9.appspot.com',
  messagingSenderId: '606262167521',
  appId: '1:606262167521:web:eb6a5330b67b80533f74a0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadTeachersData = async () => {
  const teachersCollection = collection(db, 'teachers');
  for (const teacher of teachersData) {
    try {
      await addDoc(teachersCollection, teacher);
      console.log(`Teacher ${teacher.name} uploaded successfully`);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
};

uploadTeachersData();


// запуск в терміналі node uploadTeachers.ts


// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null",
//     "teachers": {
//       ".read": "true",
//       ".write": "auth != null",
//       "$teacherId": {
//         ".validate": "newData.child('name').isString() && newData.child('surname').isString() && newData.child('languages').isString() && newData.child('levels').isString() && newData.child('rating').isNumber() && newData.child('price_per_hour').isNumber() && newData.child('avatar_url').isString() && newData.child('lesson_info').isString() && newData.child('conditions').isString() && newData.child('experience').isString()",
//         "name": {
//           ".validate": "newData.isString() && newData.val().length > 0"
//         },
//         "surname": {
//           ".validate": "newData.isString() && newData.val().length > 0"
//         },
//         "languages": {
//           ".validate": "newData.isString()"
//         },
//         "levels": {
//           ".validate": "newData.isString()"
//         },
//         "rating": {
//           ".validate": "newData.isNumber() && newData.val() >= 0 && newData.val() <= 5"
//         },
//         "price_per_hour": {
//           ".validate": "newData.isNumber() && newData.val() >= 0"
//         },
//         "avatar_url": {
//           ".validate": "newData.isString()"
//         },
//         "lesson_info": {
//           ".validate": "newData.isString()"
//         },
//         "conditions": {
//           ".validate": "newData.isString()"
//         },
//         "experience": {
//           ".validate": "newData.isString()"
//         }
//       }
//     },
//     "users": {
//       "$userId": {
//         ".read": "$userId === auth.uid",
//         ".write": "$userId === auth.uid"
//       }
//     }
//   }
// }
