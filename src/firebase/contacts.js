import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const submitContactForm = async ({ name, email, message }) => {
  const docRef = await addDoc(collection(db, "contacts"), {
    name,
    email,
    message,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};
