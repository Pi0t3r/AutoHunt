"use client";
import { useState } from "react";
import { auth, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
export default function CreateAdvert() {
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [generation, setGeneration] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [engine, setEngine] = useState<string>("");
  const [drive, setDrive] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [vin, setVin] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [gearbook, setGearbook] = useState<string>("");
  const [mileage, setMileage] = useState<string>("");
  const [damaged, setDamaged] = useState<string>("");
  const [yearbook, setYearbook] = useState<string>("");
  const [file, setFile] = useState(null);

  const handleImageUpload = (e) => {
    setFile(e.target.files[0]);
  };

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
              brand: brand,
              model: model,
              price: price,
              mileage: mileage,
              generation: generation,
              imageURL: downloadURL,
              userID: auth.currentUser?.uid,
            });
          } catch (e) {
            alert("Something went wrong", e);
          }

          setBrand("");
          setModel("");
          setGearbook("");
          setVersion("");
          setFile(null);
          setPrice("");
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
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand"
          />
        </div>
        <div>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Model"
          />
        </div>
        <div>
          <input
            type="text"
            value={generation}
            onChange={(e) => setGeneration(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={drive}
            onChange={(e) => setDrive(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div>
          <input
            type="text"
            value={gearbook}
            onChange={(e) => setGearbook(e.target.value)}
          />
        </div>
        <div>
          <input type="file" required onChange={handleImageUpload} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
