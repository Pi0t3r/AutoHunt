/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import Filters from "../filters/Filters";
import styles from "./offers.module.css";
// Defining the Offers component
export default function Offers() {
  // State variables
  const [advertData, setAdvertData] = useState<any[]>([]); // Store advertisement data
  const [sortOption, setSortOption] = useState<string>("default"); // Store the selected sorting option
  // State variable to store sorted advertisement data
  const [sortedAdvertData, setSortedAdvertData] = useState<any[]>([]);
  // Function to handle sorting option change
  const handleChangeSortOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value); // Update the sorting option state
  };
  // Effect to sort advertisement data based on the selected sorting option
  useEffect(() => {
    const sortAdvertData = () => {
      const sortedData = [...advertData]; // Create a copy of the advertisement data
      // Sort the data based on the selected sorting option
      if (sortOption === "Low") {
        sortedData.sort((a, b) => a.price - b.price); // Sort by price (Low to high)
      } else if (sortOption === "High") {
        sortedData.sort((a, b) => b.price - a.price); // Sort by price (High to low)
      }
      setSortedAdvertData(sortedData); // Update the sorted advertisement data state
    };

    sortAdvertData();
  }, [advertData, sortOption]);
  // Function to render advertisement data
  const showAdvert = () => {
    if (advertData.length === 0) {
      return <p>No ads in selected filters</p>; // Display loading message if there's no advertisement data
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
                    <p>{post.createAdvert}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  };
  // Calculate the length of the filtered and sorted advertisement data
  const filteredLength = sortedAdvertData.length;
  // Render the Offers component
  return (
    <div className={styles.div}>
      <h2>What you're looking for?</h2>
      <div>
        <Filters
          filteredLength={filteredLength}
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
