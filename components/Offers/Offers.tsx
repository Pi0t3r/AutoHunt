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

  const showAdvert = () => {
    if (advertData.length === 0) {
      return <p>Loading ...</p>;
    } else {
      return (
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
                    <p>{post.price}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  };
  return (
    <div className={styles.div}>
      <h2>What you're looking for?</h2>
      <div>
        <Filters
          lenght={advertData.length}
          advertData={advertData}
          setAdvertData={setAdvertData}
        />
      </div>
      <div className={styles.offers}>{showAdvert()}</div>
    </div>
  );
}
