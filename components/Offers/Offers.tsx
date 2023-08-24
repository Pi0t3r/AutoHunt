/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./offers.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Filters from "../filters/Filters";
import { fetchAdverts } from "@/api/getAdvertDetails";
export default function Offers() {
  const [advertData, setAdvertData] = useState<any[]>([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      setAdvertData(adverts);
    };
    fetchOffers();
  }, []);

  if (advertData.length === 0) {
    return <p>Loading ...</p>;
  }
  const showDoc = () => {
    console.log(advertData.map((car) => car.id));
  };
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
              <Link href={`/advert/${post.id}`} key={post.id}>
                <div className={styles.offer}>
                  <div className={styles.info}>
                    <p>
                      {post.brand} {post.model}{" "}
                      {post.generation ? post.generation.split(" ")[0] : ""}{" "}
                      {post.version}
                    </p>
                    <p>{post.id}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={showDoc}>click</button>
      </div>
    </div>
  );
}
