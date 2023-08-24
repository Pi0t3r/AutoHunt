import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export async function fetchAdverts() {
  try {
    const querySnapshot = await getDocs(collection(db, "adverts"));
    const adverts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return adverts;
  } catch (err) {
    console.error("My error: ", err);
    return [];
  }
}
