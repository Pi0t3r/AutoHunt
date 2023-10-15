"use client";
import { fetchAdverts } from "@/api/getAdvertDetails";
import useUserData from "@/useUserData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyAdvert() {
  // State declaration for user's advertisement data
  const [advertData, setAdvertData] = useState<any[]>([]);
  // Get user data from context
  const { userData } = useUserData();
  const { userMail } = userData;
  // Effect to fetch user's advertisements
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const adverts = await fetchAdverts();
        setAdvertData(adverts);
      } catch (error) {
        console.error("Error fetching adverts: ", error);
      }
    };
    fetchOffers();
  }, []);
  // Filter user's advertisements based on email address
  const userAdverts = advertData.filter(
    (advert) => advert.sellerContact === userMail
  );

  return (
    <div>
      <Link href="/" className="absolute top-0 left-0 p-4">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          sx={{
            borderColor: "#b78d20",
            color: "#b78d20",
            textTransform: "lowercase",

            ":hover": { borderColor: "#a67c10", color: "#b78d20" },
          }}
        >
          Back
        </Button>
      </Link>
      <div className="mt-20">
        <h5 className="text-center uppercase text-main font-medium">
          My Adverts
        </h5>
        <ul className="flex flex-row flex-wrap gap-2">
          {userAdverts.map((post) => (
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
                    <Link href={`/profile/myAdvert/advert/${post.id}`}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          letterSpacing:"1px",
                          fontWeight:"bold",
                          fontSize:"10px",
                          background: "#b78d20",
                          ":hover": { backgroundColor: "#a67c10" },
                        }}
                      >Show more</Button>
                    </Link>
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
      </div>
    </div>
  );
}
