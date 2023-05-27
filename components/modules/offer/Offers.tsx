/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./offers.module.css";
import React, { SetStateAction, useState } from "react";
import { Select } from "../select/Select";
import { body, options, fuelOptions } from "../../data/cars";
type SelectOption = {
  label: string;
  value: string;
  generations?: SelectOption[] | undefined;
  versions?: SelectOption[] | undefined;
  engine?: SelectOption[] | undefined;
  models?: SelectOption[] | undefined;
};

export default function Offers() {
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
  const getModelOptions = (): SelectOption[] => {
    if (selectedBrand) {
      const brand: SelectOption | undefined = options.find(
        (option) => option.value === selectedBrand.value
      );
      return brand ? brand.models || [] : [];
    }
    return [];
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

  const handleEngineChange = (engine: SelectOption | undefined) => {
    setSelectedEngine(engine);
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

  return (
    <div className={styles.div}>
      <h2>What you're looking for?</h2>
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
        <button className={styles.button}>Show 2500 advertisements</button>
      </div>
      <div className={styles.offers}>
        <div className={styles.offer}>
          <div className={styles.img} />
          <div className={styles.info}>
            <p className={styles.title}>Mercedes-Benz GLC 220d 4Matic AMG Premium</p>
            <p>2022 - 30 000km - Diesel - 1993 cm<sup>3</sup></p>
            <p className={styles.price}>359 900 PLN</p>
          </div>
        </div>
        <div className={styles.offer}>
          <div className={styles.img} />
          <div className={styles.info}>
            <p className={styles.title}>Mercedes-Benz GLC 220d 4Matic AMG Premium</p>
            <p>2022 - 30 000km - Diesel - 1993 cm<sup>3</sup></p>
            <p className={styles.price}>359 900 PLN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
