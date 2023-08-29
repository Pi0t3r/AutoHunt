"use client";
import React, { ChangeEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { Select, SelectOption } from "../../components/select/Select";
import { body, fuelOptions, options, drive, gearbox } from "../../data/cars";
import Link from "next/link";
import useUserData from "@/useUserData";

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
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const advertData = { ...formData };
      const advertRef = await addDoc(collection(db, "adverts"), advertData);
      console.log("Ogłoszenie dodane z ID: ", advertRef.id);
      setAdvertAdded(true);
    } catch (error) {
      console.error("Błąd przy dodawaniu ogłoszenia: ", error);
    }
  };
  const [selectedBody, setSelectedBody] = useState<SelectOption | undefined>(
    undefined
  );
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
  const [selectedFuel, setSelectedFuel] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedEngine, setSelectedEngine] = useState<
    SelectOption | undefined
  >(undefined);
  const [selectedDrive, setSelectedDrive] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedGearbox, setSelectedGearbox] = useState<
    SelectOption | undefined
  >(undefined);
  const [phone, setPhone] = useState<SelectOption | undefined>(undefined);
  const [nameAndSurname, setNameAndSurname] = useState<
    SelectOption | undefined
  >(undefined);
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

  const handleBrandChange = (brand: SelectOption | undefined) => {
    setFormData((prevData) => ({ ...prevData, brand: brand?.value || "" }));
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleModelChange = (model: SelectOption | undefined) => {
    setFormData((prevData) => ({ ...prevData, model: model?.value || "" }));
    setSelectedModel(model);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleBodyChange = (selectedBody: SelectOption | undefined) => {
    setSelectedBody(selectedBody);
  };
  const handleFuelChange = (selectedFuel: SelectOption | undefined) => {
    setSelectedFuel(selectedFuel);
  };
  const handleGenerationChange = (generation: SelectOption | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      generation: generation?.value || "",
    }));
    setSelectedGeneration(generation);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleVersionChange = (version: SelectOption | undefined) => {
    setFormData((prevData) => ({ ...prevData, version: version?.value || "" }));
    setSelectedVersion(version);
    setSelectedEngine(undefined);
  };
  const handleEngineChange = (engine: SelectOption | undefined) => {
    setFormData((prevData) => ({ ...prevData, engine: engine?.value || "" }));
    setSelectedEngine(engine);
  };
  const handleYearbookChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, yearbook: event.target.value }));
  };

  const handleMileageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, mileage: event.target.value }));
  };

  const handleFirstRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      firstRegister: event.target.value,
    }));
  };

  const handleVinChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, vin: event.target.value }));
  };

  const handleGearboxChange = (gearbox: SelectOption | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      gearbox: gearbox?.value || "",
    }));
    setSelectedGearbox(gearbox);
  };

  const handleDriveChange = (drive: SelectOption | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      drive: drive?.value || "",
    }));
    setSelectedDrive(drive);
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      price: value,
    }));
  };
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };
  const handlePlaceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      sellerPlace: value,
    }));
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
      return <p>Ogłoszenie zostało dodane</p>;
    } else {
      return (
        <p>
          {selectedBrand?.value} {selectedModel?.value}{" "}
          {selectedGeneration?.value} {selectedVersion?.value}{" "}
          {selectedEngine?.value} {selectedDrive?.value}{" "}
          {selectedGearbox?.value} {formData.price}
        </p>
      );
    }
  };
  const clearData = () => {
    setSelectedBrand(undefined);
    setSelectedDrive(undefined);
    setSelectedModel(undefined);
    setSelectedEngine(undefined);
    setSelectedFuel(undefined);
    setSelectedGearbox(undefined);
    setSelectedGeneration(undefined);
    setSelectedBody(undefined);
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
        <Select
          options={body}
          value={selectedBody}
          onChange={handleBodyChange}
          filter="Body"
          disabled={selectedVersion?.value !== undefined}
        />
        <Select
          options={options}
          value={selectedBrand}
          onChange={handleBrandChange}
          filter="Brand"
        />
        <Select
          options={getModelOptions()}
          value={selectedModel}
          onChange={handleModelChange}
          filter="Model"
        />
        <Select
          options={getGenerationOption()}
          value={selectedGeneration}
          onChange={handleGenerationChange}
          filter="Generation"
        />
        <Select
          options={getVersionOption()}
          value={selectedVersion}
          onChange={handleVersionChange}
          filter="Version"
        />
        <Select
          options={getEngineOption()}
          value={selectedEngine}
          onChange={handleEngineChange}
          filter="Engine"
        />
        <Select
          options={fuelOptions}
          value={selectedFuel}
          onChange={handleFuelChange}
          filter="Fuel type"
          disabled={selectedEngine?.value !== undefined}
        />
        <Select
          options={drive}
          value={selectedDrive}
          onChange={handleDriveChange}
          filter="Drive"
        />

        <Select
          options={gearbox}
          value={selectedGearbox}
          onChange={handleGearboxChange}
          filter="Gearbox"
        />
        <label>
          Yearbook:
          <input
            type="number"
            value={formData.yearbook}
            onChange={handleYearbookChange}
          />
        </label>
        <label>
          Mileage:
          <input
            type="number"
            value={formData.mileage}
            onChange={handleMileageChange}
          />
        </label>
        <label>
          First Register:
          <input
            type="text"
            value={formData.firstRegister}
            onChange={handleFirstRegisterChange}
          />
        </label>
        <label>
          VIN:
          <input type="text" value={formData.vin} onChange={handleVinChange} />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={formData.price}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          Your phone number:
          <input
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
          />
        </label>
        <label>
          Place:
          <input
            type="text"
            value={formData.sellerPlace}
            onChange={handlePlaceChange}
          />
        </label>
        <p>
          {userName} {userSurname} You place an ad for a car: <Result />
        </p>
        <button onClick={clearData} type="submit">
          Display
        </button>
      </form>
    </div>
  );
}
