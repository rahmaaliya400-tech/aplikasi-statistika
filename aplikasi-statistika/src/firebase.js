import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDosY79fKDPn-RMSQbO5TiMufC_IW3B0EI",
  authDomain: "statistika-asyik.firebaseapp.com",
  projectId: "statistika-asyik",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };