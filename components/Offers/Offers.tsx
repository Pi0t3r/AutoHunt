/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Filters from '../filters/Filters';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ReactPaginate from 'react-paginate';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import { EMPTY_VALUE } from '@/constants';
export default function Offers() {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(EMPTY_VALUE);

  const [sortedAdvertData, setSortedAdvertData] = useState<any[]>([]);

  const handleChangeSortOption = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    const sortAdvertData = () => {
      const sortedData = [...advertData];
      if (sortOption === 'Low') {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'High') {
        sortedData.sort((a, b) => b.price - a.price);
      }

      setSortedAdvertData(sortedData);
    };

    sortAdvertData();
  }, [advertData, sortOption]);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };
  const itemsPerPage = 20;
  const showAdvert = () => {
    if (advertData.length === EMPTY_VALUE) {
      return <p>No ads in selected filters</p>;
    }

    const offset = currentPage * itemsPerPage;
    const currentPageData = sortedAdvertData.slice(
      offset,
      offset + itemsPerPage,
    );

    return (
      <ul className="flex list-none flex-row flex-wrap justify-center">
        {sortedAdvertData.map((post) => (
          <li key={post.id} className="block">
            <div className="m-2 bg-neutral-100">
              {post.images && post.images.length > EMPTY_VALUE && (
                <Image
                  src={post.images[EMPTY_VALUE]}
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
                    {post.generation} • {post.yearbook} • {post.mileage} km •{' '}
                    {post.fuel}
                  </p>
                  <p className="text-main inherit">
                    {post.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                    <span className="ml-2 text-black">PLN</span>
                  </p>
                </div>
                <div className="flex flex-row flex-wrap justify-between items-center mt-4">
                  <Button
                    variant="outlined"
                    sx={{
                      letterSpacing: '1px',
                      fontWeight: 'bold',
                      fontSize: '10px',
                      color: '#b78d20',
                      borderColor: '#b78d20',
                      transition: 'scale .5s',
                      ':hover': { borderColor: '#a67c10', scale: '1.1' },
                    }}
                  >
                    <Link href={`advert/${post.id}`}>Show more</Link>
                  </Button>
                  <p className="text-xs text-slate-500">
                    Advert added:{' '}
                    <span className="font-bold">{post.createAdvert}</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const filteredLength = sortedAdvertData.length;

  return (
    <div className="w-full bg-white text-center text-black pt-4 bg-slate-100">
      <h2 className="font-medium">What you're looking for?</h2>
      <>
        <Filters setAdvertData={setAdvertData} />
      </>
      <p className="my-2">
        Available advertisements:{' '}
        <span className="text-main font-bold">{filteredLength}</span>
      </p>
      <>
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
            <MenuItem value={'default'}></MenuItem>
            <MenuItem value={'Low'}>By price (Low to high)</MenuItem>
            <MenuItem value={'High'}>By price (High to low)</MenuItem>
          </Select>
        </FormControl>
      </>
      <div className="mt-10 bg-[#c6c6c6b3] w-full">{showAdvert()}</div>
      <ReactPaginate
        className="flex flex-row justify-between items-center px-10"
        previousLabel={'Previous'}
        previousClassName="hover:scale-105 transition-all duration-300 hover:text-main"
        nextClassName="hover:scale-105 transition-all duration-300 hover:text-main"
        nextLabel={'Next'}
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
