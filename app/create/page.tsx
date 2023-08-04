"use client";
import React from "react";
// import { auth, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase";
import { Select } from "@/components/select/Select";

export default function CreateAdvert() {
  const [state, setState] = React.useState({
    brand: "",
    model: "",
    generation: "",
    version: "",
    engine: "",
    drive: "",
    fuelType: "",
    status: "",
    vin: "",
    price: "",
    gearbook: "",
    mileage: "",
    yearbook: "",
    file: null as File | null,
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setState({
      ...state,
      file,
    });
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   const storageRef = ref(storage, file.name);
  //   const uploadTask = uploadBytesResumable(storageRef, file);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //       }
  //     },
  //     (error) => {
  //       switch (error.code) {
  //         case "storage/unauthorized":
  //           break;
  //         case "storage/canceled":
  //           break;
  //         case "storage/unknown":
  //           break;
  //       }
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //         console.log("File available at", downloadURL);

  //         const advertCollection = collection(db, "CarOffers");
  //         const advertSnapshot = await getDocs(advertCollection);
  //         try {
  //           await addDoc(advertCollection, {
  //             brand: state.brand,
  //             model: state.model,
  //             price: state.price,
  //             mileage: state.mileage,
  //             generation: state.generation,
  //             imageURL: downloadURL,
  //             userID: auth.currentUser?.uid,
  //           });
  //         } catch (error) {
  //           alert(error);
  //         }
  //       });
  //     }
  //   );
  // };onSubmit={handleSubmit}

  return (
    <div>
      <h3>Create new advert</h3>
      <form>
        <div>
          <input type="file" required onChange={handleImageUpload} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
