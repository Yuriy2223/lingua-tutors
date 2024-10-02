import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_YOUR_API_KEY,
  authDomain: import.meta.env.VITE_YOUR_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_YOUR_PROJECT_ID,
  storageBucket: import.meta.env.VITE_YOUR_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_YOUR_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_YOUR_APP_ID,
  databaseURL:
    'https://lingua-tutors-b3db9-default-rtdb.europe-west1.firebasedatabase.app',
};

// Ініціалізуємо Firebase
const app = initializeApp(firebaseConfig);

// Ініціалізуємо Realtime Database
export const db = getDatabase(app);

// Ініціалізація аутентифікації
export const auth = getAuth(app);
