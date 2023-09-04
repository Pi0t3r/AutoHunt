"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchAdverts } from "@/api/getAdvertDetails";
import Link from "next/link";
import CarDetails from "@/components/carDetails/CarDetails";
function MyAdvert() {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const params = useParams();
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
  const showData = advertData.find((car) => car.id === params.id);
  return (
    <div>
      <div>
        <Link href="/profile/myAdvert">
          <button>Back</button>
        </Link>
      </div>
      <h2>Hi!</h2>
      <CarDetails data={showData}/>
    </div>
  );
}

export default MyAdvert;
