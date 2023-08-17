/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./offers.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import advert from "@/data/advertisement";
import Image from "next/image";
import Filters from "../filters/Filters";

export default function Offers() {
  const [filteredAds, setFilteredAds] = useState(advert);
  return (
    <div className={styles.div}>
      <h2>What you're looking for?</h2>
      <div>
        <Filters />
        <Link href={"/create"}>Add new Advert</Link>
      </div>
      <div className={styles.offers}>
        <ul>
          {filteredAds.map((post) => (
            <li key={post.id}>
              <Link href={"/advert/" + post.id} key={post.id}>
                <div className={styles.offer}>
                  <div className={styles.img}>
                    <Image
                      src={post.images[0]}
                      width={200}
                      height={200}
                      alt={`car images ${post.brand} ${post.model}`}
                    />
                  </div>
                  <div className={styles.info}>
                    <p className={styles.title}>
                      {post.brand} {post.model}{" "}
                      {post.generation ? post.generation.split(" ")[0] : ""}{" "}
                      {post.version}
                    </p>
                    <p>
                      {post.productionYear} - {post.mileage}km - {post.engine}
                    </p>
                    <p>Damaged: {post.isDamage ? "Yes" : "No"}</p>
                    <p className={styles.price}>
                      {post.price && post.price.toLocaleString()} PLN
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
