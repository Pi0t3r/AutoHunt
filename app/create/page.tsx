"use client";
import { MyInput } from "@/components/Inputs/MyInput";
import { BodySelect } from "@/components/Selects/BodySelect";
import { BrandSelect } from "@/components/Selects/BrandSelect";
import { CarDataSelect } from "@/components/Selects/CarDataSelect";
import { CustomSelect } from "@/components/Selects/CustomSelect";
import { FuelSelect } from "@/components/Selects/FuelSelect";
import ImageUpload from "@/components/imageUpload/ImageUpload";
import { db, storage } from "@/firebase";
import { SelectOptionProps } from "@/types/myTypes";
import useUserData from "@/useUserData";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { options } from "../../data/cars";

export default function CreateAdvert() {
  const { userData } = useUserData();
  const { userName, userSurname, userMail } = userData;
  // Initialize state for form data
  const [formData, setFormData] = useState({
    body: "",
    brand: "",
    model: "",
    generation: "",
    version: "",
    engine: "",
    fuel: "",
    yearbook: "",
    mileage: "",
    drive: "",
    firstRegister: "",
    vin: "",
    gearbox: "",
    price: "",
    phone: "",
    sellerName: "",
    sellerSurname: "",
    sellerContact: "",
    sellerPlace: "",
    createAdvert: "",
  });
  // State to track if the advert has been added
  const [advertAdded, setAdvertAdded] = useState(false);
  // Initialize state for selected options
  const [selectedBrand, setSelectedBrand] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedModel, setSelectedModel] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedGeneration, setSelectedGeneration] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedVersion, setSelectedVersion] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedEngine, setSelectedEngine] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedGearbox, setSelectedGearbox] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedDrive, setSelectedDrive] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedBody, setSelectedBody] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedFuel, setSelectedFuel] = useState<
    SelectOptionProps | undefined
  >(undefined);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  // Function to update a specific form field in the state
  const mapField = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Function to handle the selection of images
  const handleImageSelect = (files: FileList) => {
    const imageArray = Array.from(files);
    setSelectedImages(imageArray);
  };
  // Function to get model options based on the selected brand
  const getModelOptions = (): SelectOptionProps[] => {
    if (selectedBrand && selectedBrand.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand.value
      );
      return brand ? brand.models || [] : [];
    }
    return [];
  };
  // Function to get generation options based on the selected model
  const getGenerationOption = (): SelectOptionProps[] => {
    if (selectedModel && selectedModel.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand?.value
      );
      if (brand && brand.models) {
        const model = brand.models.find(
          (option) => option.value === selectedModel.value
        );
        return model ? model.generations || [] : [];
      }
    }
    return [];
  };
  // Function to get version options based on the selected generation
  const getVersionOption = (): SelectOptionProps[] => {
    if (selectedGeneration && selectedGeneration.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand?.value
      );
      if (brand && brand.models) {
        const model = brand.models.find(
          (option) => option.value === selectedModel?.value
        );
        if (model && model.generations) {
          const generation = model.generations.find(
            (option) => option.value === selectedGeneration.value
          );
          return generation ? generation.versions || [] : [];
        }
      }
    }
    return [];
  };
  // Function to get engine options based on the selected version
  const getEngineOption = (): SelectOptionProps[] => {
    if (selectedVersion && selectedVersion.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand?.value
      );
      if (brand && brand.models) {
        const model = brand.models.find(
          (option) => option.value === selectedModel?.value
        );
        if (model && model.generations) {
          const generation = model.generations.find(
            (option) => option.value === selectedGeneration?.value
          );
          if (generation && generation.versions) {
            const version = generation.versions.find(
              (option) => option.value === selectedVersion.value
            );
            return version ? version.engine || [] : [];
          }
        }
      }
    }
    return [];
  };
  // Function to handle the form submission
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const date = new Date();
      const advertData = {
        ...formData,
        createAdvert: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      };
      // Add advert data to the Firestore collection
      const advertRef = await addDoc(collection(db, "adverts"), advertData);
      // Upload images to Firebase Storage and update the advert with image URLs
      if (selectedImages.length > 0) {
        const imageUrls = await uploadImagesToStorage(
          selectedImages,
          advertRef.id
        );
        await updateDoc(advertRef, { images: imageUrls });
      }
      // Set advertAdded to true
      setAdvertAdded(true);
    } catch (error) {
      console.error("Error while adding advert: ", error);
    }
  };
  // Function to handle brand change
  const handleBrandChange = (brand: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, brand: brand?.value || "" }));
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  // Function to handle body change
  const handleBodyChange = (body: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, body: body?.value || "" }));
    setSelectedBody(body);
  };

  // Function to handle fuel change
  const handleFuelChange = (fuel: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, fuel: fuel?.value || "" }));
    setSelectedFuel(fuel);
  };
  // Function to update user information in the form
  const handleUserInfoChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      sellerName: userName,
      sellerSurname: userSurname,
      sellerContact: userMail,
    }));
  };

  // Component to display result message
  const Result = () => {
    if (advertAdded) {
      return <p>Your ad has been added</p>;
    } else {
      return null;
    }
  };
  // Function to upload images to Firebase Storage
  const uploadImagesToStorage = async (images: File[], advertId: string) => {
    const imageUrls: string[] = [];

    for (const image of images) {
      const storageRef = ref(storage, `adverts/${advertId}/${image.name}`);
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      imageUrls.push(downloadURL);
    }

    return imageUrls;
  };
  // Function to clear selected data
  const clearData = () => {
    setSelectedBody(undefined);
    setSelectedFuel(undefined);
    setSelectedModel(undefined);
    setSelectedEngine(undefined);
    setSelectedDrive(undefined);
    setSelectedGearbox(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    handleUserInfoChange();
  };
  return (
    <>
      <div className="p-4">
        <Link href={"/"}>
          <BsFillArrowLeftCircleFill className="w-10 h-10 text-main" />
        </Link>
      </div>
      <h3 className="text-center uppercase font-bold italic">Create new advert</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-2 p-4 w-full"
      >
        <p className="font-medium text-main text-lg">Main Information</p>
        <ImageUpload onImageSelect={handleImageSelect} />
        <BodySelect onChange={handleBodyChange} value={selectedBody} />
        <BrandSelect onChange={handleBrandChange} />
        <CarDataSelect
          filter="Model"
          value={selectedModel}
          options={getModelOptions()}
          onChange={(model: SelectOptionProps | undefined) => {
            mapField("model", model?.value || "");
            setSelectedModel(model);
            setSelectedGeneration(undefined);
            setSelectedVersion(undefined);
            setSelectedEngine(undefined);
          }}
        />
        <CarDataSelect
          filter="Generation"
          value={selectedGeneration}
          onChange={(generation: SelectOptionProps | undefined) => {
            mapField("generation", generation?.value || "");
            setSelectedGeneration(generation);
            setSelectedVersion(undefined);
            setSelectedEngine(undefined);
          }}
          options={getGenerationOption()}
        />
        <CarDataSelect
          filter="Version"
          value={selectedVersion}
          options={getVersionOption()}
          onChange={(version: SelectOptionProps | undefined) => {
            mapField("version", version?.value || "");
            setSelectedVersion(version);
            setSelectedEngine(undefined);
          }}
        />
        <CarDataSelect
          filter="Engine"
          value={selectedEngine}
          options={getEngineOption()}
          onChange={(engine: SelectOptionProps | undefined) => {
            mapField("engine", engine?.value || "");
            setSelectedEngine(engine);
          }}
        />
        <FuelSelect onChange={handleFuelChange} value={selectedFuel} />
        <CustomSelect
          onChangeDrive={(drive: SelectOptionProps | undefined) => {
            mapField("drive", drive?.value || "");
            setSelectedDrive(drive);
          }}
          onChangeGearbox={(gearbox: SelectOptionProps | undefined) => {
            mapField("gearbox", gearbox?.value || "");
            setSelectedGearbox(gearbox);
          }}
          valueDrive={selectedDrive}
          valueGearbox={selectedGearbox}
        />
        <div className="flex flex-row flex-wrap gap-2 justify-center">
          <p className="text-main font-medium text-lg text-center">Other information</p>
          <MyInput
            value={formData.yearbook}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField("yearbook", event.target.value);
            }}
            type="number"
            placeholder="Yearbook"
          />
          <MyInput
            value={formData.mileage}
            type="number"
            placeholder="Mileage"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField("mileage", event.target.value);
            }}
          />
          <MyInput
            type="text"
            value={formData.firstRegister}
            placeholder="First register e.g. 23/01/2023"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField("firstRegister", event.target.value);
            }}
          />
          <MyInput
            placeholder="VIN"
            value={formData.vin}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField("vin", event.target.value);
            }}
            type="text"
          />
          <MyInput
            placeholder="Price"
            type="number"
            value={formData.price}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField("price", event.target.value);
            }}
          />
          <MyInput
            placeholder="Phone number"
            type="tel"
            value={formData.phone}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField("phone", event.target.value);
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
        </div>
        <p>
          <Result />
        </p>
        <button onClick={clearData} type="submit" className="bg-main p-2 rounded-md text-white px-4 font-medium">
          Display
        </button>
      </form>
    </>
  );
}
