import app from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";
import { user } from "firebase-functions/lib/providers/auth";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  async registro(email, password, ocupacion, nombre, ciudad, estado, cp) {
    const NuevoUsuario = await this.auth.createUserWithEmailAndPassword({
      email,
      password
    });
    return await NuevoUsuario.user.updateProfile({
      ocupacion: ocupacion,
      nombre: nombre,
      ciudad: ciudad,
      estado: estado,
      cp: cp
    });
  }
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }
  async logout() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
