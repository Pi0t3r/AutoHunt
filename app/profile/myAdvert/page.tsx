"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchAdverts } from "@/api/getAdvertDetails";
import useUserData from "@/useUserData";

export default function MyAdvert() {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const { userData } = useUserData();
  const { userMail } = userData;
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const adverts = await fetchAdverts();
        setAdvertData(adverts);
      } catch (error) {
        console.error("Error fetching adverts: ", error);
      }
    };
    fetchOffers();
  }, []);
  const userAdverts = advertData.filter(
    (advert) => advert.sellerContact === userMail
  );

  return (
    <div>
      <div>
        <Link href="/">
          <button>Back</button>
        </Link>
      </div>
      <p>My Adverts</p>
      <ul>
        {userAdverts.map((advert) => (
          <li key={advert.id}>
            <div>
              <p>
                {advert.brand} {advert.model} {advert.generation}{" "}
                {advert.version} {advert.engine} {advert.price} PLN{" "}
                {advert.sellerPlace}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
