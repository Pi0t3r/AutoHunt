"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "next/navigation";
import { fetchAdverts } from "@/api/getAdvertDetails";
import Link from "next/link";
import CarDetails from "@/components/carDetails/CarDetails";
import SellerDetails from "@/components/sellerDetails/SellerDetails";
import { db } from "@/firebase";
import { deleteDoc, doc, collection, updateDoc } from "firebase/firestore";
import { MyInput } from "@/components/Inputs/MyInput";

function MyAdvert() {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    body: "",
    brand: "",
    model: "",
    generation: "",
    version: "",
    drive: "",
    engine: "",
    firstRegister: "",
    fuel: "",
    gearbox: "",
    mileage: "",
    phone: "",
    price: "",
    yearbook: "",
    sellerPlace: "",
    vin: "",
  });
  useEffect(() => {
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      setAdvertData(adverts);
    };
    fetchOffers();
  }, []);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleSaveChanges = async () => {
    if (params.id) {
      try {
        const advertRef = doc(db, "adverts", params.id as string);
        await updateDoc(advertRef, {
          phone: formData.phone,
          price: formData.price,
          mileage: formData.mileage,
          sellerPlace: formData.sellerPlace,
        });
        setIsEditing(false);
      } catch (err) {
        console.error(`Error while saving changes: ${err}`);
      }
    }
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  const handleDelete = async () => {
    if (params.id) {
      try {
        await deleteDoc(doc(collection(db, "adverts"), params.id as string));
        window.location.href = "/profile/myAdvert";
      } catch (err) {
        console.error(`Error while deleting ads: ${err}`);
      }
    }
  };

  if (advertData.length === 0) {
    return <p>Loading ...</p>;
  }

  const showData = advertData.find((car) => car.id === params.id);
  return (
    <div>
      <div>
        <Link href="/profile/myAdvert">
          <button>Back</button>
        </Link>
      </div>
      {isEditing ? (
        <form>
          <MyInput
            value={formData.mileage}
            type="number"
            title="Mileage"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFormData((prevData) => ({
                ...prevData,
                mileage: event.target.value,
              }));
            }}
          />
          <MyInput
            title="Price"
            type="number"
            value={formData.price}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                price: value,
              }));
            }}
          />
          <MyInput
            title="Your phone number"
            type="tel"
            value={formData.phone}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                phone: value,
              }));
            }}
          />
          <MyInput
            title="Place"
            type="text"
            value={formData.sellerPlace}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                sellerPlace: value,
              }));
            }}
          />
          <button onClick={handleSaveChanges}>Save changes</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </form>
      ) : (
        <div>
          <CarDetails data={showData} />
          <SellerDetails data={showData} />
          <div>
            <button onClick={handleDelete}>Delete advert</button>
            <button onClick={handleEdit}>Edit advert</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAdvert;
