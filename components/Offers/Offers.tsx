/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./offers.module.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Filters from "../filters/Filters";
import { fetchAdverts } from "@/api/getAdvertDetails";

export default function Offers() {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState("default");
  useEffect(() => {
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      if (sortBy === "Low") {
        adverts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "High") {
        adverts.sort((a, b) => b.price - a.price);
      } else if (sortBy === "default") {
        return;
      }
      setAdvertData(adverts);
    };
    fetchOffers();
  }, [sortBy]);

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
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
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
      <div>
        <span>Sortuj </span>
        <select name="sort" id="sort" onChange={handleSortChange}>
          <option value="default">---</option>
          <option value="Low">By price (Low to hight)</option>
          <option value="Hight">By price (Hight to low)</option>
        </select>
      </div>
      <div className={styles.offers}>{showAdvert()}</div>
    </div>
  );
}
