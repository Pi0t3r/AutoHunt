import { db } from "@/firebase";
import { FiltersProps, SelectOption } from "@/types/myTypes";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { body, fuelOptions, options } from "../../data/cars";
import styles from "../offers/offers.module.css";
import { Select } from "../select/Select";

export default function Filters({
  filteredLength,
  setAdvertData,
}: FiltersProps) {
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
      const advertCollection = collection(db, "adverts");
      let newQuery = query(advertCollection);
      // Apply filters based on selected options
      if (selectedBrand) {
        newQuery = query(newQuery, where("brand", "==", selectedBrand.value));
      }
      if (selectedModel) {
        newQuery = query(newQuery, where("model", "==", selectedModel.value));
      }
      if (selectedGeneration) {
        newQuery = query(
          newQuery,
          where("generation", "==", selectedGeneration.value)
        );
      }
      if (selectedVersion) {
        newQuery = query(
          newQuery,
          where("version", "==", selectedVersion.value)
        );
      }
      if (selectedEngine) {
        newQuery = query(newQuery, where("engine", "==", selectedEngine.value));
      }
      if (selectedBody) {
        newQuery = query(newQuery, where("body", "==", selectedBody.value));

      }
      if (selectedFuel) {
        newQuery = query(newQuery, where("fuel", "==", selectedFuel.value));
      }
      // Fetch data based on the query
      const advertSnapshot = await getDocs(newQuery);
      const advert = advertSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAdvertData(advert);
    };

    getCarAdvert();
  }, [
    selectedBrand,
    selectedModel,
    selectedBody,
    setAdvertData,
    selectedEngine,
    selectedGeneration,
    selectedFuel,
    selectedVersion,
  ]);
  // Functions to retrieve options based on selected filters
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
  // Event handlers for filter selection
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
      {/* Dropdown selects for various filters */}
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
      <p className={styles.information}>
        Available advertisements: {filteredLength}
      </p>
    </div>
  );
}
