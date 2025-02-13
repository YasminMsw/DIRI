import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IUserService } from "./IUserService";

class FirebaseUserService implements IUserService{
  getAllUsers(): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
  

  async updateUserAdminRole(uid: string, isAdmin: boolean) {
    // Código existente para actualizar roles de admin
  }

  // 🚀 Agregar la función faltante `setUserRoles`
  async setUserRoles(uid: string, data: { email: string; roles: { admin: boolean } }): Promise<void> {
    try {
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, { email: data.email, roles: data.roles }, { merge: true });
      console.log(`Usuario ${uid} actualizado con roles:`, data.roles);
    } catch (error) {
      console.error("Error al asignar roles:", error);
      throw error;
    }
  }
}

export const userService = new FirebaseUserService();
