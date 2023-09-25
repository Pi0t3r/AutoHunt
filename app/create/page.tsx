"use client";
import React, { ChangeEvent, useState } from "react";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { options } from "../../data/cars";
import Link from "next/link";
import useUserData from "@/useUserData";
import { BodySelect } from "@/components/Selects/BodySelect";
import { BrandSelect } from "@/components/Selects/BrandSelect";
import { FuelSelect } from "@/components/Selects/FuelSelect";
import { MyInput } from "@/components/Inputs/MyInput";
import { CustomSelect } from "@/components/Selects/CustomSelect";
import { CarDataSelect } from "@/components/Selects/CarDataSelect";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { ImageUploadProps, SelectOptionProps } from "@/types/myTypes";

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      onImageSelect(files);
    }
  };
  return (
    <div>
      <input type="file" multiple onChange={handleImageSelect} required />
    </div>
  );
};

export default function CreateAdvert() {
  const { userData } = useUserData();
  const { userName, userSurname, userMail } = userData;
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
  const [advertAdded, setAdvertAdded] = useState(false);

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
  const getModelOptions = (): SelectOptionProps[] => {
    if (selectedBrand && selectedBrand.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand.value
      );
      return brand ? brand.models || [] : [];
    }
    return [];
  };
  const handleImageSelect = (files: FileList) => {
    const imageArray = Array.from(files);
    setSelectedImages(imageArray);
  };

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
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const date = new Date();
      const advertData = {
        ...formData,
        createAdvert: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      };
      const advertRef = await addDoc(collection(db, "adverts"), advertData);
      if (selectedImages.length > 0) {
        const imageUrls = await uploadImagesToStorage(
          selectedImages,
          advertRef.id
        );
        await updateDoc(advertRef, { images: imageUrls });
      }
      setAdvertAdded(true);
    } catch (error) {
      console.error("Error while adding advert: ", error);
    }
  };
  const handleBrandChange = (brand: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, brand: brand?.value || "" }));
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleBodyChange = (body: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, body: body?.value || "" }));
    setSelectedBody(body);
  };

  const handleFuelChange = (fuel: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, fuel: fuel?.value || "" }));
    setSelectedFuel(fuel);
  };

  const handleUserInfoChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      sellerName: userName,
      sellerSurname: userSurname,
      sellerContact: userMail,
    }));
  };
  const Result = () => {
    if (advertAdded) {
      return <p>Your ad has been added</p>;
    } else {
      return null;
    }
  };
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
  const clearData = () => {
    setSelectedBrand(undefined);
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
    <div>
      <Link href={"/"}>
        <button>Back</button>
      </Link>
      <h3>Create new advert</h3>
      <form onSubmit={handleSubmit}>
        <ImageUpload onImageSelect={handleImageSelect} />
        <BodySelect onChange={handleBodyChange} value={selectedBody} />
        <BrandSelect onChange={handleBrandChange} />
        <CarDataSelect
          filter="Model"
          value={selectedModel}
          options={getModelOptions()}
          onChange={(model: SelectOptionProps | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              model: model?.value || "",
            }));
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
            setFormData((prevData) => ({
              ...prevData,
              generation: generation?.value || "",
            }));
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
            setFormData((prevData) => ({
              ...prevData,
              version: version?.value || "",
            }));
            setSelectedVersion(version);
            setSelectedEngine(undefined);
          }}
        />
        <CarDataSelect
          filter="Engine"
          value={selectedEngine}
          options={getEngineOption()}
          onChange={(engine: SelectOptionProps | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              engine: engine?.value || "",
            }));
            setSelectedEngine(engine);
          }}
        />
        <FuelSelect onChange={handleFuelChange} value={selectedFuel} />
        <CustomSelect
          onChangeDrive={(drive: SelectOptionProps | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              drive: drive?.value || "",
            }));
            setSelectedDrive(drive);
          }}
          onChangeGearbox={(gearbox: SelectOptionProps | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              gearbox: gearbox?.value || "",
            }));
            setSelectedGearbox(gearbox);
          }}
          valueDrive={selectedDrive}
          valueGearbox={selectedGearbox}
        />
        <MyInput
          value={formData.yearbook}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFormData((prevData) => ({
              ...prevData,
              yearbook: event.target.value,
            }));
          }}
          type="number"
          title="Yearbook"
        />
        <MyInput
          value={formData.mileage}
          type="number"
          title="Mileage"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFormData((prevData) => ({
              ...prevData,
              mileage: event.target.value,
            }));
          }}
        />
        <MyInput
          title="First Register"
          type="text"
          value={formData.firstRegister}
          placeholder="e.g. 23/01/2023"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFormData((prevData) => ({
              ...prevData,
              firstRegister: event.target.value,
            }));
          }}
        />
        <MyInput
          title="VIN"
          value={formData.vin}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFormData((prevData) => ({
              ...prevData,
              vin: event.target.value,
            }));
          }}
          type="text"
        />
        <MyInput
          title="Price"
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
          title="Your phone number"
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
          title="Place"
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
        <p>
          {userName} {userSurname} <Result />
        </p>
        <button onClick={clearData} type="submit">
          Display
        </button>
      </form>
    </div>
  );
}
