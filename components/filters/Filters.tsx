import { Select } from "../select/Select";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { body, fuelOptions, options } from "../../data/cars";
import styles from "../offers/offers.module.css";
type SelectOption = {
  value: string;
  brand?: SelectOption[] | undefined;
  models?: SelectOption[] | undefined;
  generations?: SelectOption[] | undefined;
  versions?: SelectOption[] | undefined;
  body?: SelectOption[] | undefined;
  engine?: SelectOption[] | undefined;
};

export default function Filters() {
  const [selectedBody, setSelectedBody] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedFuel, setSelectedFuel] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedGeneration, setSelectedGeneration] = useState<
    SelectOption | undefined
  >(undefined);
  const [selectedVersion, setSelectedVersion] = useState<
    SelectOption | undefined
  >(undefined);
  const [selectedBrand, setSelectedBrand] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedModel, setSelectedModel] = useState<SelectOption | undefined>(
    undefined
  );
  const [selectedEngine, setSelectedEngine] = useState<
    SelectOption | undefined
  >(undefined);
  useEffect(() => {
    const getCarAdvert = async () => {
      const advertCollection = collection(db, "CarOffers");
      const advertSnapshot = await getDocs(advertCollection);
      const advert = advertSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    };
    getCarAdvert();
  }, []);

  const getModelOptions = (): SelectOption[] => {
    if (selectedBrand) {
      const brand: SelectOption | undefined = options.find(
        (option) => option.value === selectedBrand.value
      );
      return brand ? brand.models || [] : [];
    }
    return [];
  };

  const getGenerationOption = (): SelectOption[] => {
    if (selectedModel) {
      const model = getModelOptions().find(
        (option) => option.value === selectedModel.value
      );
      return model ? model.generations || [] : [];
    }
    return [];
  };

  const getVersionOption = (): SelectOption[] => {
    if (selectedGeneration) {
      const generation = getGenerationOption().find(
        (option) => option.value === selectedGeneration.value
      );
      return generation ? generation.versions || [] : [];
    }

    return [];
  };

  const getEngineOption = (): SelectOption[] => {
    if (selectedVersion) {
      const version = getVersionOption().find(
        (option) => option.value === selectedVersion.value
      );
      return version ? version.engine || [] : [];
    }

    return [];
  };
  const handleBrandChange = (brand: SelectOption | undefined) => {
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleModelChange = (model: SelectOption | undefined) => {
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
    setSelectedGeneration(generation);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };
  const handleVersionChange = (version: SelectOption | undefined) => {
    setSelectedVersion(version);
    setSelectedEngine(undefined);
  };
  const handleEngineChange = (engine: SelectOption | undefined) => {
    setSelectedEngine(engine);
  };
  return (
    <div>
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
      <button className={styles.button}>Show advertisements</button>
    </div>
  );
}
