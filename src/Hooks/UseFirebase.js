import { useState } from "react";
import initializeFirebase from "../Page/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect } from "react";





initializeFirebase();


const useFirebase = () => {

  const [user, setUser] = useState({});
  const [isLogindata, setIslogindata] = useState(true);
  const [userErrer, setUserErrer] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();




  const bandNewUser = (email, password, location, hostory) => {
      setIslogindata(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setUserErrer('');
              const destination = location?.state?.from || `/`;
              hostory.replace(destination);

          })
          .catch((error) => {
              setUserErrer(error.message);
          })
          .finally(() => setIslogindata(false));

  };


  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {

              setUser(user);

          } else {
              setUser({});
          }
          setIslogindata(false)
      });

      return () => unsubscribe;

  }, []);


  const logOutUser = () => {
      signOut(auth).then(() => {
          setUserErrer('');
      }).catch((error) => {
          setUserErrer(error.message);
      })
          .finally(() => setIslogindata(false));
  };


  const logInUser = (email, password, location, hostory) => {
      setIslogindata(true);
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const destination = location?.state?.from || `/`;
              hostory.replace(destination);

              setUserErrer('');
          })
          .catch((error) => {
              setUserErrer(error.message);
          })
          .finally(() => setIslogindata(false));
  }



  const signInWithGoogle = (location, hostory) => {
      setIslogindata(true);
      signInWithPopup(auth, googleProvider)
          .then((result) => {
              const user = result.user;
              setUserErrer('');
              const destination = location?.state?.from || `/`;
              hostory.replace(destination);

          }).catch((error) => {
              setUserErrer(error.message);

          })
          .finally(() => setIslogindata(false));

  }


  const signInWithFacebook = (location, hostory) => {

      signInWithPopup(auth, facebookProvider)
          .then((result) => {
              // The signed-in user info.
              const user = result.user;

              setUserErrer('');
              const destination = location?.state?.from || `/`;
              hostory.replace(destination);

              // ...
          })
          .catch((error) => {
              setUserErrer(error.message);
          })
          .finally(() => setIslogindata(false));;





  }





  return {
      user,
      isLogindata,
      userErrer,
      bandNewUser,
      logOutUser,
      logInUser,
      signInWithGoogle,
      signInWithFacebook
  };
}


export default useFirebase;