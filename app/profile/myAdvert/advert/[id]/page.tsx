"use client";
import { fetchAdverts } from "@/api/getAdvertDetails";
import { MyInput } from "@/components/Inputs/MyInput";
import Banner from "@/components/banner/Banner";
import CarDetails from "@/components/carDetails/CarDetails";
import SellerDetails from "@/components/sellerDetails/SellerDetails";
import { db } from "@/firebase";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
function MyAdvert() {
  const [advertData, setAdvertData] = useState<any[]>([]);
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    body: "",
    brand: "",
    model: "",
    generation: "",
    version: "",
    drive: "",
    engine: "",
    firstRegister: "",
    fuel: "",
    gearbox: "",
    mileage: "",
    phone: "",
    price: "",
    yearbook: "",
    sellerPlace: "",
    vin: "",
  });

  // Function to handle the "Edit" button click
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  // Function to save changes to the Firebase database
  const handleSaveChanges = async () => {
    if (params.id) {
      try {
        await updateDoc(doc(db, "adverts", params.id as string), {
          phone: formData.phone,
          price: formData.price,
          mileage: formData.mileage,
          sellerPlace: formData.sellerPlace,
        });
      } catch (err) {
        console.error(`Error while saving changes: ${err}`);
      }
    }
  };
  useEffect(() => {
    // Fetch advert data
    const fetchOffers = async () => {
      const adverts = await fetchAdverts();
      setAdvertData(adverts);
    };
    fetchOffers();
  }, [formData, params.id]);

  // Function to handle canceling the edit mode
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // Function to handle deleting the advert
  const handleDelete = async () => {
    if (params.id) {
      try {
        await deleteDoc(doc(collection(db, "adverts"), params.id as string));
        window.location.href = "/profile/myAdvert";
      } catch (err) {
        console.error(`Error while deleting ads: ${err}`);
      }
    }
  };

  if (advertData.length === 0) {
    return <p>Loading ...</p>;
  }

  const showData = advertData.find((car) => car.id === params.id);
  return (
    <div>
      <Link href="/profile/myAdvert" className="absolute top-0 left-0 p-4">
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
      {isEditing ? (
        <form className="mt-20 p-2 flex flex-row flex-wrap gap-2">
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
          <div className="flex flex-row flex-wrap gap-2">
            <Button
              variant="contained"
              onClick={handleSaveChanges}
              size="small"
              startIcon={<SaveIcon />}
              sx={{
                letterSpacing: "1px",
                fontWeight: "bold",
                fontSize: "10px",
                background: "#b78d20",
                ":hover": { backgroundColor: "#a67c10" },
              }}
            >
              Save changes
            </Button>
            <Button
              variant="contained"
              onClick={handleCancelEdit}
              size="small"
              sx={{
                letterSpacing: "1px",
                fontWeight: "bold",
                fontSize: "10px",
                background: "#b78d20",
                ":hover": { backgroundColor: "#a67c10" },
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div className="mt-20">
          <Banner images={showData.images} />
          <CarDetails data={showData} />
          <SellerDetails data={showData} />
          <div className="p-4 flex flex-row flex-wrap gap-2">
            <Button
              variant="contained"
              onClick={handleDelete}
              size="small"
              startIcon={<DeleteIcon />}
              sx={{
                letterSpacing: "1px",
                fontWeight: "bold",
                fontSize: "10px",
                background: "#b78d20",
                ":hover": { backgroundColor: "#a67c10" },
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
                letterSpacing: "1px",
                fontWeight: "bold",
                fontSize: "10px",
                background: "#b78d20",
                ":hover": { backgroundColor: "#a67c10" },
              }}
            >
              Edit advert
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAdvert;
