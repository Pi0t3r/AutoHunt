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
import Banner from "@/components/banner/Banner";
import MyTimer from "@/components/timer/MyTimer";

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
  const [countdownActive, setCountdownActive] = useState(false);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);

  useEffect(() => {
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      setAdvertData(adverts);
      const editAdvert = adverts.find((car) => car.id === params.id);
      if (editAdvert) {
        setFormData({
          ...formData,
          ...editAdvert,
        });
      }
    };
    fetchOffers();
  }, [formData, params.id]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setCountdownActive(false);
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
        setCountdownActive(true);
        localStorage.setItem("countdownActive", "true");
      } catch (err) {
        console.error(`Error while saving changes: ${err}`);
      }
    }
  };
  useEffect(() => {
    const savedCountdownActive = localStorage.getItem("countdownActive");
    if (savedCountdownActive === "true") {
      setCountdownActive(true);
    }
  }, []);
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
          <Banner images={showData.images} />
          <CarDetails data={showData} />
          <SellerDetails data={showData} />
          <div>
            <button onClick={handleDelete}>Delete advert</button>
            <button onClick={handleEdit} disabled={countdownActive}>
              Edit advert
            </button>
          </div>
          {countdownActive && (
            <div>
              <p>Remaining time to next edit:</p>
              <MyTimer
                expiryTimestamp={time}
                onExpire={() => setCountdownActive(false)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MyAdvert;
