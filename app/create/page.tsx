"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { Select } from "../../components/select/Select";
import { body, fuelOptions, options, drive, gearbox } from "../../data/cars";
import Link from "next/link";
type SelectOptions = {
  value?: string | undefined;
  brand?: SelectOptions[] | string;
  model?: SelectOptions[] | string;
  generation?: SelectOptions[] | string;
  version?: SelectOptions[] | string;
  body?: SelectOptions[] | string;
  yearbook?: SelectOptions[] | number;
  mileage?: SelectOptions[] | number;
  engine?: SelectOptions[] | string;
  gearbook?: SelectOptions[] | string;
  drive?: SelectOptions[] | string;
  fuelType?: SelectOptions[] | string;
  damaged?: SelectOptions[] | boolean;
  firstRegistration?: string;
  vin?: SelectOptions[] | string;
  status?: SelectOptions[] | string;
  price?: SelectOptions[] | number;
  file?: SelectOptions[] | string;
  dealer?: SelectOptions[] | string;
  phone?: SelectOptions[] | string;
  location?: SelectOptions[] | string;
};

export default function CreateAdvert() {
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
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const advertData = { ...formData };
      const advertRef = await addDoc(collection(db, "adverts"), advertData);
      console.log("Ogłoszenie dodane z ID: ", advertRef.id);
    } catch (error) {
      console.error("Błąd przy dodawaniu ogłoszenia: ", error);
    }
  };
  const [selectedBody, setSelectedBody] = useState<SelectOptions | undefined>(
    undefined
  );
  const [selectedBrand, setSelectedBrand] = useState<SelectOptions | undefined>(
    undefined
  );
  const [selectedModel, setSelectedModel] = useState<SelectOptions | undefined>(
    undefined
  );
  const [selectedGeneration, setSelectedGeneration] = useState<
    SelectOptions | undefined
  >(undefined);
  const [selectedVersion, setSelectedVersion] = useState<
    SelectOptions | undefined
  >(undefined);
  const [selectedFuel, setSelectedFuel] = useState<SelectOptions | undefined>(
    undefined
  );
  const [selectedEngine, setSelectedEngine] = useState<
    SelectOptions | undefined
  >(undefined);
  const [selectedDrive, setSelectedDrive] = useState<SelectOptions | undefined>(
    undefined
  );
  const [selectedGearbox, setSelectedGearbox] = useState<
    SelectOptions | undefined
  >(undefined);

  const getModelOptions = (): SelectOptions[] => {
    if (selectedBrand && selectedBrand.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand.value
      );
      return brand ? brand.models || [] : [];
    }
    return [];
  };

  const getGenerationOption = (): SelectOptions[] => {
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

  const getVersionOption = (): SelectOptions[] => {
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

  const getEngineOption = (): SelectOptions[] => {
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

  const handleBrandChange = (brand: SelectOptions | undefined) => {
    setFormData((prevData) => ({ ...prevData, brand: brand?.value || "" }));
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleModelChange = (model: SelectOptions | undefined) => {
    setFormData((prevData) => ({ ...prevData, model: model?.value || "" }));
    setSelectedModel(model);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleBodyChange = (selectedBody: SelectOptions | undefined) => {
    setSelectedBody(selectedBody);
  };
  const handleFuelChange = (selectedFuel: SelectOptions | undefined) => {
    setSelectedFuel(selectedFuel);
  };
  const handleGenerationChange = (generation: SelectOptions | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      generation: generation?.value || "",
    }));
    setSelectedGeneration(generation);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleVersionChange = (version: SelectOptions | undefined) => {
    setFormData((prevData) => ({ ...prevData, version: version?.value || "" }));
    setSelectedVersion(version);
    setSelectedEngine(undefined);
  };
  const handleEngineChange = (engine: SelectOptions | undefined) => {
    setFormData((prevData) => ({ ...prevData, engine: engine?.value || "" }));
    setSelectedEngine(engine);
  };
  const handleYearbookChange = (event) => {
    setFormData((prevData) => ({ ...prevData, yearbook: event.target.value }));
  };

  const handleMileageChange = (event) => {
    setFormData((prevData) => ({ ...prevData, mileage: event.target.value }));
  };

  const handleFirstRegisterChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      firstRegister: event.target.value,
    }));
  };

  const handleVinChange = (event) => {
    setFormData((prevData) => ({ ...prevData, vin: event.target.value }));
  };

  const handleGearboxChange = (gearbox: SelectOptions | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      gearbox: gearbox?.value || "",
    }));
    setSelectedGearbox(gearbox);
  };

  const handleDriveChange = (drive: SelectOptions | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      drive: drive?.value || "",
    }));
    setSelectedDrive(drive);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      price: value !== "" ? parseFloat(value) : "",
    }));
  };
  
  const Result = () => {
    return (
      <p>
        {selectedBrand?.value} {selectedModel?.value}{" "}
        {selectedGeneration?.value} {selectedVersion?.value}{" "}
        {selectedEngine?.value} {selectedDrive?.value} {selectedGearbox?.value}{" "}
        {formData.price}
      </p>
    );
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
        <label htmlFor="yearbook">
          Yearbook:
          <input
            type="number"
            id="yearbook"
            value={formData.yearbook}
            onChange={handleYearbookChange}
          />
        </label>
        <label htmlFor="mileage">
          Mileage:
          <input
            type="number"
            id="mileage"
            value={formData.mileage}
            onChange={handleMileageChange}
          />
        </label>
        <label htmlFor="firstRegister">
          First Register:
          <input
            type="text"
            id="firstRegister"
            value={formData.firstRegister}
            onChange={handleFirstRegisterChange}
          />
        </label>
        <label htmlFor="vin">
          VIN:
          <input
            type="text"
            id="vin"
            value={formData.vin}
            onChange={handleVinChange}
          />
        </label>
        <label htmlFor="price">
          Price:
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={handlePriceChange}
          />
        </label>
        <p>
          Wystawiasz ogłoszenie o samochód: <Result />
        </p>
        <button type="submit">Wystaw</button>
      </form>
    </div>
  );
}
