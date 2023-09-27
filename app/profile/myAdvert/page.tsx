"use client";
import { fetchAdverts } from "@/api/getAdvertDetails";
import useUserData from "@/useUserData";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./myAdvert.module.css";

export default function MyAdvert() {
  // State declaration for user's advertisement data
  const [advertData, setAdvertData] = useState<any[]>([]);
  // Get user data from context
  const { userData } = useUserData();
  const { userMail } = userData;
  // Effect to fetch user's advertisements
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
  // Filter user's advertisements based on email address
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
            <Link href={`/profile/myAdvert/advert/${advert.id}`}>
              <div className={styles.info}>
                <p>
                  {advert.brand} {advert.model} {advert.generation}{" "}
                  {advert.version} {advert.engine} {advert.price} PLN{" "}
                  {advert.sellerPlace}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
