/* eslint-disable @next/next/no-img-element */
'use client';
import { fetchAdverts } from '@/api/getAdvertDetails';
import { Banner } from '@/components/Banner';
import { CarDetails } from '@/components/CarDetails';
import { ReportForm } from '@/components/ReportForm';
import { SellerDetails } from '@/components/SellerDetails';
import { Button } from '@mui/material';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EMPTY_VALUE } from '@/constants';

function Advert() {
  const [reportVisible, setReportVisible] = useState(false);
  const handleReportClick = () => {
    setReportVisible(true);
  };

  const [advertData, setAdvertData] = useState<any[]>([]);
  const params = useParams();
  useEffect(() => {
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      setAdvertData(adverts);
    };
    fetchOffers();
  }, []);
  if (advertData.length === EMPTY_VALUE) {
    return <p>Loading ...</p>;
  }
  const showData = advertData.find((car) => car.id === params.id);
  return (
    <main className="mt-20 overflow-hidden">
      <section className="flex flex-row flex-wrap w-full justify-start p-4">
        <Banner images={showData.images} />
        <CarDetails data={showData} />
      </section>
      <section>
        <SellerDetails data={showData} />
      </section>
      <section>
        <div className="p-4 flex flex-row flex-wrap items-center justify-center">
          <p>Something wrong with this advert?</p>
          <Button
            variant="outlined"
            onClick={handleReportClick}
            sx={{
              letterSpacing: '1px',
              fontWeight: 'medium',
              fontSize: '10px',
              borderColor: '#b78d20',
              color: '#b78d20',
              marginLeft: 2,
              transition: 'scale .5s',
              ':hover': {
                background: 'none',
                scale: '1.1',
                borderColor: '#b78d20',
              },
            }}
          >
            Report
          </Button>
        </div>
      </section>
      <section>
        <ReportForm
          setReportVisible={setReportVisible}
          reportVisible={reportVisible}
        />
      </section>
    </main>
  );
}
export default Advert;
