/* eslint-disable @next/next/no-img-element */
"use client";
import { fetchAdverts } from "@/api/getAdvertDetails";
import Banner from "@/components/banner/Banner";
import CarDetails from "@/components/carDetails/CarDetails";
import ReportForm from "@/components/reportForm/ReportForm";
import SellerDetails from "@/components/sellerDetails/SellerDetails";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillFlagFill } from "react-icons/bs";

function Advert() {
  const [reportVisible, setReportVisible] = useState(false);

  // Function to handle opening the report form
  const handleReportClick = () => {
    setReportVisible(true);
  };

  const [advertData, setAdvertData] = useState<any[]>([]);
  const params = useParams();
  useEffect(() => {
    // Fetch advertisements data
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      setAdvertData(adverts);
    };
    fetchOffers();
  }, []);

  if (advertData.length === 0) {
    return <p>Loading ...</p>;
  }
  // Find and display data for the specific advertisement
  const showData = advertData.find((car) => car.id === params.id);
  return (
    <>
      <div className="p-4">
        <Link href={"/"}>
          <BsFillArrowLeftCircleFill className="w-10 h-10 text-main" />
        </Link>
      </div>
      <>
        <Banner images={showData.images} />
        <CarDetails data={showData} />
        <SellerDetails data={showData} />
        <div className="m-4 flex flex-row flex-wrap items-center justify-start">
          <p>Something wrong with this advert?</p>
          <button
            onClick={handleReportClick}
            className="inline-flex bg-main p-3 rounded-md shadow-lg text-white items-center ml-4"
          >
            <BsFillFlagFill /> <span className="ml-2">Report </span>
          </button>
        </div>
      </>
      <ReportForm
        setReportVisible={setReportVisible}
        reportVisible={reportVisible}
      />
    </>
  );
}
export default Advert;
