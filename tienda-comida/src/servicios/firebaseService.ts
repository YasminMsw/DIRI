import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const addOrder = async (orderData: any) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderData);
    console.log("Pedido guardado con ID: ", docRef.id);
  } catch (error) {
    console.error("Error al guardar el pedido: ", error);
  }
};
