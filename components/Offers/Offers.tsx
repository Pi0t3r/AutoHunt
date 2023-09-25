/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./offers.module.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Filters from "../filters/Filters";

export default function Offers() {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");
  const handleChangeSortOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };
  const [sortedAdvertData, setSortedAdvertData] = useState<any[]>([]); 
  useEffect(() => {
    const sortAdvertData = () => {
      const sortedData = [...advertData];
      if (sortOption === "Low") {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (sortOption === "High") {
        sortedData.sort((a, b) => b.price - a.price);
      }
      setSortedAdvertData(sortedData);
    };

    sortAdvertData();
  }, [advertData, sortOption]);
  const showAdvert = () => {
    if (advertData.length === 0) {
      return <p>Loading ...</p>;
    } else {
      return (
        <ul>
          {sortedAdvertData.map((post) => (
            <li key={post.id}>
              <Link href={`/advert/${post.id}`} key={post.id}>
                <div className={styles.offer}>
                  <div className={styles.info}>
                    <div>
                      {post.images && post.images.length > 0 && (
                        <img src={post.images[0]} alt={`Image 0`} />
                      )}
                    </div>
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
  const filteredLength = sortedAdvertData.length;

  return (
    <div className={styles.div}>
      <h2>What you're looking for?</h2>
      <div>
        <Filters
          filteredLength={filteredLength}
          advertData={advertData}
          setAdvertData={setAdvertData}
        />
      </div>
      <div>
        <span>Sort </span>
        <select
          name="sort"
          id="sort"
          value={sortOption}
          onChange={handleChangeSortOption}
        >
          <option value="default">---</option>
          <option value="Low">By price (Low to high)</option>
          <option value="High">By price (High to low)</option>
        </select>
      </div>

      <div className={styles.offers}>{showAdvert()}</div>
    </div>
  );
}
