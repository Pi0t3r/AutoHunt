import { db } from '@/firebase';
import { FiltersProps } from '@/types/ComponentTypes';
import { SelectOption } from '@/types/SelectTypes';
import Button from '@mui/material/Button';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { body, fuelOptions, options } from '../../data/cars';
import { SelectUI } from '../select/SelectUI';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function Filters({ setAdvertData }: FiltersProps) {
  const [selectedBody, setSelectedBody] = useState<SelectOption | undefined>(
    undefined,
  );
  const [selectedFuel, setSelectedFuel] = useState<SelectOption | undefined>(
    undefined,
  );
  const [selectedGeneration, setSelectedGeneration] = useState<
    SelectOption | undefined
  >(undefined);
  const [selectedVersion, setSelectedVersion] = useState<
    SelectOption | undefined
  >(undefined);
  const [selectedBrand, setSelectedBrand] = useState<SelectOption | undefined>(
    undefined,
  );
  const [selectedModel, setSelectedModel] = useState<SelectOption | undefined>(
    undefined,
  );
  const [selectedEngine, setSelectedEngine] = useState<
    SelectOption | undefined
  >(undefined);
  useEffect(() => {
    const getCarAdvert = async () => {
      const advertCollection = collection(db, 'adverts');
      let newQuery = query(advertCollection);
      if (selectedBrand) {
        newQuery = query(newQuery, where('brand', '==', selectedBrand.value));
      }
      if (selectedModel) {
        newQuery = query(newQuery, where('model', '==', selectedModel.value));
      }
      if (selectedGeneration) {
        newQuery = query(
          newQuery,
          where('generation', '==', selectedGeneration.value),
        );
      }
      if (selectedVersion) {
        newQuery = query(
          newQuery,
          where('version', '==', selectedVersion.value),
        );
      }
      if (selectedEngine) {
        newQuery = query(newQuery, where('engine', '==', selectedEngine.value));
      }
      if (selectedBody) {
        newQuery = query(newQuery, where('body', '==', selectedBody.value));
      }
      if (selectedFuel) {
        newQuery = query(newQuery, where('fuel', '==', selectedFuel.value));
      }
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
  const getModelOptions = (): SelectOption[] => {
    if (selectedBrand) {
      const brand: SelectOption | undefined = options.find(
        (option) => option.value === selectedBrand.value,
      );
      return brand ? brand.models || [] : [];
    }
    return [];
  };

  const getGenerationOption = (): SelectOption[] => {
    if (selectedModel) {
      const model = getModelOptions().find(
        (option) => option.value === selectedModel.value,
      );
      return model ? model.generations || [] : [];
    }
    return [];
  };

  const getVersionOption = (): SelectOption[] => {
    if (selectedGeneration) {
      const generation = getGenerationOption().find(
        (option) => option.value === selectedGeneration.value,
      );
      return generation ? generation.versions || [] : [];
    }

    return [];
  };

  const getEngineOption = (): SelectOption[] => {
    if (selectedVersion) {
      const version = getVersionOption().find(
        (option) => option.value === selectedVersion.value,
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
  const clearFilter = () => {
    setSelectedBody(undefined);
    setSelectedBrand(undefined);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
    setSelectedFuel(undefined);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-2 p-2">
      <SelectUI
        options={body}
        value={selectedBody}
        onChange={handleBodyChange}
        filter="Body"
        isDisabled={selectedVersion?.value !== undefined}
      />
      <SelectUI
        options={options}
        value={selectedBrand}
        onChange={handleBrandChange}
        filter="Brand"
      />
      <SelectUI
        options={getModelOptions()}
        value={selectedModel}
        onChange={handleModelChange}
        filter="Model"
      />
      <SelectUI
        options={getGenerationOption()}
        value={selectedGeneration}
        onChange={handleGenerationChange}
        filter="Generation"
      />
      <SelectUI
        options={getVersionOption()}
        value={selectedVersion}
        onChange={handleVersionChange}
        filter="Version"
      />
      <SelectUI
        options={getEngineOption()}
        value={selectedEngine}
        onChange={handleEngineChange}
        filter="Engine"
      />
      <SelectUI
        options={fuelOptions}
        value={selectedFuel}
        onChange={handleFuelChange}
        filter="Fuel type"
        isDisabled={selectedEngine?.value !== undefined}
      />
      {/* <Button
        variant="contained"
        onClick={clearFilter}
        sx={{
          letterSpacing: '1px',
          fontWeight: 'bold',
          fontSize: '10px',
          background: '#b78d20',
          marginLeft: 2,
          transition: 'scale .5s',
          ':hover': {
            backgroundColor: '#a67c10',
            scale: '1.1',
          },
        }}
      >
        Report
      </Button> */}
      <Button
        variant="outlined"
        onClick={clearFilter}
        endIcon={<DeleteForeverIcon />}
        sx={{
          letterSpacing: '1px',
          fontWeight: 'bold',
          fontSize: '10px',
          borderColor: '#b78d20',
          color: '#b78d20',
          marginLeft: 2,
          transition: 'scale .5s',
          ':hover': {
            scale: '1.1',
            borderColor: '#b78d20',
          },
        }}
      >
        Clear filter
      </Button>
    </div>
  );
}
