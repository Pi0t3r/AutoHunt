"use client";
import { fetchAdverts } from "@/api/getAdvertDetails";
import useUserData from "@/useUserData";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyAdvert() {
  const [advertData, setAdvertData] = useState<any[]>([]);

  const { userData } = useUserData();
  const { userMail } = userData;

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

  const userAdverts = advertData.filter(
    (advert) => advert.sellerContact === userMail
  );

  return (
    <main className="mx-auto max-w-7xl mt-10">
      <header className="relative h-20 mt-0">
        <h5 className="uppercase text-main font-medium absolute bottom-0 left-1/2 -translate-x-1/2">My Adverts</h5>
      </header>
      <div className="mt-20 flex flex-row flex-wrap justify-center">
        <ul className="flex flex-row flex-wrap gap-2 justify-center items-center">
          {userAdverts.map((post) => (
            <li key={post.id} className="block">
              <section className="m-2 bg-neutral-100">
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
                          letterSpacing: "1px",
                          fontWeight: "bold",
                          fontSize: "10px",
                          transition: "scale .5s",
                          background: "#b78d20",
                          ":hover": {
                            backgroundColor: "#a67c10",
                            scale: "1.1",
                          },
                        }}
                      >
                        Show more
                      </Button>
                    </Link>
                    <p className="text-xs text-slate-500">
                      Advert added:{" "}
                      <span className="font-bold">{post.createAdvert}</span>
                    </p>
                  </div>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
