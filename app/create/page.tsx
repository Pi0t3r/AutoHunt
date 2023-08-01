"use client";
import React from "react";
import { auth, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  CollectionReference,
  DocumentData,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
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
    file: null,
  });
  function handleChange(e: { target: { value: any } }) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.value]: value,
    });
  }

  // const handleImageUpload = (e) => {
  //   state.file(e.target.files[0]);

  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);

          const advertCollection = collection(db, "CarOffers");
          const advertSnapshot = await getDocs(advertCollection);
          try {
            await addDoc(advertCollection, {
              brand: state.brand,
              model: state.model,
              price: state.price,
              mileage: state.mileage,
              generation: state.generation,
              imageURL: downloadURL,
              userID: auth.currentUser?.uid,
            });
          } catch (error) {
            alert(error);
          }
          // state.brand("");
          // setModel("");
          // setGearbook("");
          // setVersion("");
          // setFile(null);
          // setPrice("");
        });
      }
    );
  };

  return (
    <div>
      <h3>Create new advert</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={state.brand}
            onChange={handleChange}
            placeholder="Brand"
          />
        </div>
        <div>
          <input
            type="text"
            value={state.model}
            onChange={handleChange}
            placeholder="Model"
          />
        </div>
        <div>
          <input type="text" value={state.generation} onChange={handleChange} />
        </div>
        <div>
          <input type="text" value={state.version} onChange={handleChange} />
        </div>
        <div>
          <input type="text" value={state.engine} onChange={handleChange} />
        </div>
        <div>
          <input type="text" value={state.drive} onChange={handleChange} />
        </div>
        <div>
          <input type="text" value={state.fuelType} onChange={handleChange} />
        </div>
        <div>
          <input type="text" value={state.status} onChange={handleChange} />
        </div>
        <div>
          <input type="text" value={state.vin} onChange={handleChange} />
        </div>
        <div>
          <input
            type="text"
            value={state.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>
        <div>
          <input type="text" value={state.gearbook} onChange={handleChange} />
        </div>
        <div>
          {/* <input type="file" required onChange={handleImageUpload} /> */}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
