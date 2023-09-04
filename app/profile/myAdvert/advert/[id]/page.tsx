"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "next/navigation";
import { fetchAdverts } from "@/api/getAdvertDetails";
import Link from "next/link";
import CarDetails from "@/components/carDetails/CarDetails";
import SellerDetails from "@/components/sellerDetails/SellerDetails";
import { db } from "@/firebase";
import { deleteDoc, doc, collection, updateDoc } from "firebase/firestore";


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
      <CarDetails data={showData} />
      <SellerDetails data={showData} />
      <div>
        <button onClick={handleDelete}>Delete advert</button>
      </div>
    </div>
  );
}

export default MyAdvert;
