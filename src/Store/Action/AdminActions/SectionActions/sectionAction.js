
import { db } from "../../../../Config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore"; 

export const addCategory=(value)=>async (dispatch)=>{
    console.log("here")
    const docRef = await addDoc(collection(db, "Categories"), {
        label: value,
        createdAt:Timestamp.now(),
        updatedAt:Timestamp.now()
      });
      console.log("Document written with ID: ", docRef.id);
}
export const addSocialLinks=(value)=>async (dispatch)=>{
    console.log("here")
    const docRef = await addDoc(collection(db, "SocialLinks"), {
        label: value,
        createdAt:Timestamp.now(),
        updatedAt:Timestamp.now()
      });
      console.log("Document written with ID: ", docRef.id);
}
export const addPrivacyPolicies=({value,data})=>async (dispatch)=>{
    console.log("here")
    const docRef = await addDoc(collection(db, "Privacy Policies"), {
        label: value,
        body:data,
        createdAt:Timestamp.now(),
        updatedAt:Timestamp.now()
      });
      console.log("Document written with ID: ", docRef.id);
}