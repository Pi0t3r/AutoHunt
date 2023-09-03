"use client";
import React, { ChangeEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { SelectOption } from "../../components/select/Select";
import { options } from "../../data/cars";
import Link from "next/link";
import useUserData from "@/useUserData";
import { BodySelect } from "@/components/Selects/BodySelect";
import { BrandSelect } from "@/components/Selects/BrandSelect";
import { FuelSelect } from "@/components/Selects/FuelSelect";
import { MyInput } from "@/components/Inputs/MyInput";
import { CustomSelect } from "@/components/Selects/CustomSelect";
import { CarDataSelect } from "@/components/Selects/CarDataSelect";
export default function CreateAdvert() {
  const { userData } = useUserData();
  const { userName, userSurname, userMail } = userData;
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    generation: "",
    version: "",
    engine: "",
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
  });
  const [advertAdded, setAdvertAdded] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedModel, setSelectedModel] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedGeneration, setSelectedGeneration] = useState<
    SelectOption | undefined
  >(undefined);
  const [selectedVersion, setSelectedVersion] = useState<
    SelectOption | undefined
  >(undefined);

  const [selectedEngine, setSelectedEngine] = useState<
    SelectOption | undefined
  >(undefined);
  const [selectedGearbox, setSelectedGearbox] = useState<
    SelectOption | undefined
  >(undefined);
  const [selectedDrive, setSelectedDrive] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const getModelOptions = (): SelectOption[] => {
    if (selectedBrand && selectedBrand.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand.value
      );
      return brand ? brand.models || [] : [];
    }
    return [];
  };

  const getGenerationOption = (): SelectOption[] => {
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

  const getVersionOption = (): SelectOption[] => {
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

  const getEngineOption = (): SelectOption[] => {
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
      const advertData = { ...formData };
      const advertRef = await addDoc(collection(db, "adverts"), advertData);
      setAdvertAdded(true);
    } catch (error) {
      console.error("Błąd przy dodawaniu ogłoszenia: ", error);
    }
  };
  const handleBrandChange = (brand: SelectOption | undefined) => {
    setFormData((prevData) => ({ ...prevData, brand: brand?.value || "" }));
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
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
      return;
    }
  };
  const clearData = () => {
    setSelectedBrand(undefined);
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
        <BodySelect />
        <BrandSelect onChange={handleBrandChange} />
        {/* <CarDataSelect
          filter="Model"
          value={selectedModel}
          onChange={(model: SelectOption | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              model: model?.value || "",
            }));
            setSelectedModel(model);
            setSelectedGeneration(undefined);
            setSelectedVersion(undefined);
            setSelectedEngine(undefined);
          }}
          level="Model"
        />
        <CarDataSelect
          filter="Generation"
          value={selectedGeneration}
          onChange={(generation: SelectOption | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              generation: generation?.value || "",
            }));
            setSelectedGeneration(generation);
            setSelectedVersion(undefined);
            setSelectedEngine(undefined);
          }}
          level="Generation"
        />
        <CarDataSelect
          filter="Version"
          value={selectedVersion}
          onChange={(version: SelectOption | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              version: version?.value || "",
            }));
            setSelectedVersion(version);
            setSelectedEngine(undefined);
          }}
          level="Version"
        />
        <CarDataSelect
          filter="Engine"
          value={selectedEngine}
          onChange={(engine: SelectOption | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              engine: engine?.value || "",
            }));
            setSelectedEngine(engine);
          }}
          level="Engine"
        /> */}
        <CarDataSelect
          filter="Model"
          value={selectedModel}
          options={getModelOptions()}
          onChange={(model: SelectOption | undefined) => {
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
          onChange={(generation: SelectOption | undefined) => {
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
          onChange={(version: SelectOption | undefined) => {
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
          onChange={(engine: SelectOption | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              engine: engine?.value || "",
            }));
            setSelectedEngine(engine);
          }}
        />
        <FuelSelect />
        <CustomSelect
          onChangeDrive={(drive: SelectOption | undefined) => {
            setFormData((prevData) => ({
              ...prevData,
              drive: drive?.value || "",
            }));
            setSelectedDrive(drive);
          }}
          onChangeGearbox={(gearbox: SelectOption | undefined) => {
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
