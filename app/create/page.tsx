"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { Select } from "../../components/select/Select";
import { body, fuelOptions, options } from "../../data/cars";

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
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleModelChange = (model: SelectOptions | undefined) => {
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
    setSelectedGeneration(generation);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleVersionChange = (version: SelectOptions | undefined) => {
    setSelectedVersion(version);
    setSelectedEngine(undefined);
  };
  const handleEngineChange = (engine: SelectOptions | undefined) => {
    setSelectedEngine(engine);
  };
  // console.log(selectedBrand?.value);
  const Result = () => {
    return (
      <p>
        {selectedBrand?.value} {selectedModel?.value}{" "}
        {selectedGeneration?.value} {selectedVersion?.value}{" "}
        {selectedEngine?.value}
      </p>
    );
  };
  return (
    <div>
      <h3>Create new advert</h3>
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
      <p>
        Wystawiasz ogłoszenie o samochód: <Result />
      </p>
    </div>
  );
}
