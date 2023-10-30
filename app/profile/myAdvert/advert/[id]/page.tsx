'use client';
import { fetchAdverts } from '@/api/getAdvertDetails';
import { MyInput } from '@/components/Inputs/MyInput';
import Banner from '@/components/banner/Banner';
import CarDetails from '@/components/carDetails/CarDetails';
import SellerDetails from '@/components/sellerDetails/SellerDetails';
import { db } from '@/firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { EMPTY_VALUE } from '@/constants';
function MyAdvert() {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    body: '',
    brand: '',
    model: '',
    generation: '',
    version: '',
    drive: '',
    engine: '',
    firstRegister: '',
    fuel: '',
    gearbox: '',
    mileage: '',
    phone: '',
    price: '',
    yearbook: '',
    sellerPlace: '',
    vin: '',
  });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = async () => {
    if (params.id) {
      try {
        await updateDoc(doc(db, 'adverts', params.id as string), {
          phone: formData.phone,
          price: formData.price,
          mileage: formData.mileage,
          sellerPlace: formData.sellerPlace,
        });
        setSaveSuccess(true);
      } catch (err) {
        console.error(`Error while saving changes: ${err}`);
      }
    }
  };
  useEffect(() => {
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      setAdvertData(adverts);
    };
    fetchOffers();
  }, [formData, params.id]);

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (params.id) {
      try {
        await deleteDoc(doc(collection(db, 'adverts'), params.id as string));
        window.location.href = '/profile/myAdvert';
      } catch (err) {
        console.error(`Error while deleting ads: ${err}`);
      }
    }
  };
  if (advertData.length === EMPTY_VALUE) {
    return <p>Loading ...</p>;
  }

  const showData = advertData.find((car) => car.id === params.id);
  return (
    <main className="mt-10">
      {isEditing ? (
        <form className="mt-20 mb-10">
          <fieldset className="p-2 flex flex-row flex-wrap gap-4 justify-center items-center">
            <MyInput
              value={formData.mileage}
              type="number"
              placeholder="Mileage"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setFormData((prevData) => ({
                  ...prevData,
                  mileage: event.target.value,
                }));
              }}
            />
            <MyInput
              placeholder="Price"
              type="number"
              value={formData.price}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                setFormData((prevData) => ({
                  ...prevData,
                  price: value,
                }));
              }}
            />
            <MyInput
              placeholder="Phone number"
              type="tel"
              value={formData.phone}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                setFormData((prevData) => ({
                  ...prevData,
                  phone: value,
                }));
              }}
            />
            <MyInput
              placeholder="Place"
              type="text"
              value={formData.sellerPlace}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                setFormData((prevData) => ({
                  ...prevData,
                  sellerPlace: value,
                }));
              }}
            />
          </fieldset>
          <fieldset className="flex flex-row flex-wrap gap-2 justify-center items-center w-full">
            <Button
              variant="contained"
              onClick={handleSaveChanges}
              size="small"
              startIcon={<SaveIcon />}
              sx={{
                letterSpacing: '1px',
                fontWeight: 'bold',
                fontSize: '10px',
                background: '#b78d20',
                ':hover': { backgroundColor: '#a67c10' },
              }}
            >
              Save changes
            </Button>
            <Button
              variant="contained"
              onClick={handleCancelEdit}
              size="small"
              sx={{
                letterSpacing: '1px',
                fontWeight: 'bold',
                fontSize: '10px',
                background: '#b78d20',
                ':hover': { backgroundColor: '#a67c10' },
              }}
            >
              Cancel
            </Button>
          </fieldset>
          {saveSuccess && (
            <p className="text-center mt-2">Succesfully save changes!</p>
          )}
        </form>
      ) : (
        <div className="my-20">
          <section>
            <Banner images={showData.images} />
          </section>
          <section>
            <CarDetails data={showData} />
          </section>
          <section>
            <SellerDetails data={showData} />
          </section>
          <section className="p-4 flex flex-row flex-wrap gap-2 justify-center items-center">
            <Button
              variant="contained"
              onClick={handleDelete}
              size="small"
              startIcon={<DeleteIcon />}
              sx={{
                letterSpacing: '1px',
                fontWeight: 'bold',
                fontSize: '10px',
                background: '#b78d20',
                ':hover': { backgroundColor: '#a67c10' },
              }}
            >
              Delete advert
            </Button>
            <Button
              variant="contained"
              onClick={handleEdit}
              size="small"
              startIcon={<EditIcon />}
              sx={{
                letterSpacing: '1px',
                fontWeight: 'bold',
                fontSize: '10px',
                background: '#b78d20',
                ':hover': { backgroundColor: '#a67c10' },
              }}
            >
              Edit advert
            </Button>
          </section>
        </div>
      )}
    </main>
  );
}

export default MyAdvert;
