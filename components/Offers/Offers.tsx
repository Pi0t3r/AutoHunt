/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Filters from "../filters/Filters";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ReactPaginate from "react-paginate";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Defining the Offers component
export default function Offers() {
  // State variables
  const [advertData, setAdvertData] = useState<any[]>([]); // Store advertisement data
  const [sortOption, setSortOption] = useState<string>("default"); // Store the selected sorting option
  const [currentPage, setCurrentPage] = useState(0);

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

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };
  const itemsPerPage = 20;
  const showAdvert = () => {
    if (advertData.length === 0) {
      return <p>No ads in selected filters</p>; // Display loading message if there's no advertisement data
    } else {
      const offset = currentPage * itemsPerPage;
      const currentPageData = sortedAdvertData.slice(
        offset,
        offset + itemsPerPage
      );
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
                      {post.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                      <span className="ml-2 text-black">PLN</span>
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
    <div className="w-full bg-white text-center text-black mt-4">
      <h2 className="font-medium">What you're looking for?</h2>
      <div>
        <Filters setAdvertData={setAdvertData} />
      </div>
      <p className="my-2">
        Available advertisements:{" "}
        <span className="text-main font-bold">{filteredLength}</span>
      </p>
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
      <ReactPaginate
        className="flex flex-row justify-between items-center px-10"
        previousLabel={"Previous"}
        previousClassName="hover:scale-105 transition-all duration-300 hover:text-main"
        nextClassName="hover:scale-105 transition-all duration-300 hover:text-main"
        nextLabel={"Next"}
        pageCount={Math.ceil(sortedAdvertData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}
