/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Filters from "../filters/Filters";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Defining the Offers component
export default function Offers() {
  // State variables
  const [advertData, setAdvertData] = useState<any[]>([]); // Store advertisement data
  const [sortOption, setSortOption] = useState<string>("default"); // Store the selected sorting option

  // State variable to store sorted advertisement data
  const [sortedAdvertData, setSortedAdvertData] = useState<any[]>([]);

  // Function to handle sorting option change
  const handleChangeSortOption = (event: SelectChangeEvent) => {
    setSortOption(event.target.value); // Update the sorting option state
  };
  const currentDate = new Date();

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
        <ul className="flex list-none flex-row flex-wrap justify-center">
          {sortedAdvertData.map((post) => (
            <li key={post.id} className="block">
              <div className="m-2 bg-neutral-100">
                {post.images && post.images.length > 0 && (
                  <Image
                    src={post.images[0]}
                    width={500}
                    height={250}
                    alt="First image car"
                  />
                )}
                <div className="text-left p-4">
                  <h5>
                    {post.brand} {post.model}
                  </h5>
                  <div className="flex flex-col flex-wrap justify-between">
                    <p className="flex flex-row flex-wrap">
                      {post.generation} • {post.yearbook} • {post.mileage} km •{" "}
                      {post.fuel}
                    </p>
                    <p className="text-main inherit">
                      {post.price} <span className="ml-2 text-black">PLN</span>
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap justify-between items-center mt-4">
                    <button className="bg-main rounded-md p-2 text-white font-medium">
                      <Link href={`/advert/${post.id}`}>Show more</Link>
                    </button>
                    <p className="text-xs text-slate-500">
                      Advert added:{" "}
                      <span className="font-bold">{post.createAdvert}</span>
                    </p>
                  </div>
                </div>
              </div>
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
    <div className="w-full bg-white text-center text-black">
      <h2>What you're looking for?</h2>
      <div>
        <Filters
          filteredLength={filteredLength}
          setAdvertData={setAdvertData}
        />
      </div>
      <div>
        <FormControl
          sx={{
            m: 1,
            minWidth: 100,
          }}
        >
          <InputLabel id="sort">Sort</InputLabel>
          <Select
            labelId="sort"
            autoWidth
            label="sort"
            value={sortOption}
            onChange={handleChangeSortOption}
          >
            <MenuItem value={"default"}></MenuItem>
            <MenuItem value={"Low"}>By price (Low to high)</MenuItem>
            <MenuItem value={"High"}>By price (High to low)</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mt-10 bg-[#c6c6c6b3] w-full">{showAdvert()}</div>
    </div>
  );
}
