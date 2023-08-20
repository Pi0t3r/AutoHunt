/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./offers.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import advert from "@/data/advertisement";
import Image from "next/image";
import Filters from "../filters/Filters";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default function Offers() {
  const [filteredAds, setFilteredAds] = useState(advert);
  const [advertData, setAdvertData] = useState([]);

  const fetchAdverts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "adverts"));
      const adverts = querySnapshot.docs.map((doc) => doc.data());
      setAdvertData(adverts);
    } catch (error) {
      console.error("Błąd przy pobieraniu ogłoszeń: ", error);
    }
  };
  useEffect(() => {
    fetchAdverts();
  }, []);

  return (
    <div className={styles.div}>
      <h2>What you're looking for?</h2>
      <div>
        <Filters />
        <Link href={"/create"}>Add new Advert</Link>
      </div>
      <div className={styles.offers}>
        <ul>
          {advertData.map((post) => (
            <li key={post.id}>
              <Link href={"/advert/" + post.id} key={post.id}>
                <div className={styles.offer}>
                  <div className={styles.img}>
                    {/* <Image
                      src={post.images[0]}
                      width={200}
                      height={200}
                      alt={`car images ${post.brand} ${post.model}`}
                    /> */}
                  </div>
                  <div className={styles.info}>
                    <p>
                      {post.brand} {post.model}{" "}
                      {post.generation ? post.generation.split(" ")[0] : ""}{" "}
                      {post.version}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
