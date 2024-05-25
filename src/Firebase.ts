// import { initializeApp } from "firebase/app";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from "firebase/auth";
// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";
// import axios from 'axios'

// const firebaseConfig = {
//     apiKey: "AIzaSyA4oTt4KYiGTajrF02YoobmJ0MrpbxpKs0",
//     authDomain: "cyberverdict-a4c31.firebaseapp.com",
//     projectId: "cyberverdict-a4c31",
//     storageBucket: "cyberverdict-a4c31.appspot.com",
//     messagingSenderId: "837530208297",
//     appId: "1:837530208297:web:551df01907b0daf7173438",
//     measurementId: "G-5NSB4Q369D"
//   };

//   const app = initializeApp(firebaseConfig)
//   const auth = getAuth(app)
//   const db = getFirestore(app)
//   const googleProvider = new GoogleAuthProvider()

//   const registerUserToMongo = async (name: any,email: any,uid: any, displayPicture: any) => {
//     await fetch("https://localhost:5000/api/users/register", {
//       method: "POST",
//       body: JSON.stringify({
//         name,
//         email,
//         uid,
//         displayPicture
//       }),
//       headers: {
//         "Content-type": "application/json"
//       }
//     }).then(() => {
//       console.log("User registered successfully")
//     }).catch((err) => {
//       console.log(err.message)
//     })
//   }

//   const signInWithGoogle = async () => {
//     try {
//         const response = await signInWithPopup(auth, googleProvider)
//         const user = response.user
//         const q = query(collection(db, "users"), where("uid", "==", user.uid))
//         const docs = await getDocs(q)
//         await registerUserToMongo(
//           user.displayName,
//           user.email,
//           user.uid,
//           user.photoURL
//         )
//         // if(docs.docs.length === 0) {
//         //     await addDoc(collection(db, 'users'), {
//         //         uid: user.uid,
//         //         name: user.displayName,
//         //         authProvider: "google",
//         //         email: user.email
//         //     })
//         // }
//     } catch (error:any) {
//         console.log(error.message)
//         alert(error.message)
//     }
//   }

//   const logInWithEmailAndPassword = async (email: any,password: any) => {
//     try {
//         await signInWithEmailAndPassword(auth,email,password)
//     } catch (error: any) {
//         console.log(error.message)
//     }
//   }

//   const registerWithEmailAndPassword = async (name:any, email: any, password: any) => {
//     try {
//         const response = await createUserWithEmailAndPassword(auth, email, password)
//         const user = response.user
//         const profilePic = "https://res.cloudinary.com/dltwxrndj/image/upload/v1703172095/download_mtinan.png"
//         // await addDoc(collection(db, 'users'), {
//         //     uid: user.uid,
//         //     name,
//         //     authProvider: "local",
//         //     email
//         // })
//         await registerUserToMongo(name,email,user.uid,profilePic)
//     } catch (error) {
//         console.error("firebase registration error", error)
//     }
//   }

//   const sendPasswordReset = async (email: any) => {
//     try {
//         await sendPasswordResetEmail(auth,email)
//         alert("Password reset email is sent")
//     } catch (error: any) {
//         console.log(error.message)
//     }
//   }

//   const logOut = () => {
//     signOut(auth)
//   }

//   export {auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logOut}