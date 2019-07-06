import { useEffect, useState } from "react";
import firebase from "../firebase";

// Hook para manejar las sesiones de los usuarios c:
function useAuth() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe(); //unmount cuando utilizamos el return
  }, []);

  return authUser;
}

export default useAuth;
