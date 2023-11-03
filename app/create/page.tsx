'use client';
import { MyInput } from '@/components/MyInput';
import { BodySelect } from '@/components/Selects/BodySelect';
import { BrandSelect } from '@/components/Selects/BrandSelect';
import { CarDataSelect } from '@/components/Selects/CarDataSelect';
import { CustomSelect } from '@/components/Selects/CustomSelect';
import { FuelSelect } from '@/components/Selects/FuelSelect';
import ImageUpload from '@/components/ImageUpload';
import { db, storage } from '@/firebase';
import { SelectOptionProps } from '@/types/SelectTypes';
import useUserData from '@/useUserData';
import { Button } from '@mui/material';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { ChangeEvent, useState } from 'react';
import { options } from '../../data/cars';
import { EMPTY_VALUE } from '@/constants';

export default function CreateAdvert() {
  const { userData } = useUserData();
  const { userName, userSurname, userMail } = userData;
  const [formData, setFormData] = useState({
    body: '',
    brand: '',
    model: '',
    generation: '',
    version: '',
    engine: '',
    fuel: '',
    yearbook: '',
    mileage: '',
    drive: '',
    firstRegister: '',
    vin: '',
    gearbox: '',
    price: '',
    phone: '',
    sellerName: '',
    sellerSurname: '',
    sellerContact: '',
    sellerPlace: '',
    createAdvert: '',
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

  const mapField = (field: string, value: number | string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageSelect = (files: FileList) => {
    const imageArray = Array.from(files);
    setSelectedImages(imageArray);
  };

  const getModelOptions = (): SelectOptionProps[] => {
    if (selectedBrand && selectedBrand.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand.value,
      );
      return brand ? brand.models || [] : [];
    }
    return [];
  };
  const getGenerationOption = (): SelectOptionProps[] => {
    if (selectedModel && selectedModel.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand?.value,
      );
      if (brand && brand.models) {
        const model = brand.models.find(
          (option: { value: string }) => option.value === selectedModel.value,
        );
        return model ? model.generations || [] : [];
      }
    }
    return [];
  };
  const getVersionOption = (): SelectOptionProps[] => {
    if (selectedGeneration && selectedGeneration.value) {
      const brand = options.find(
        (option) => option.value === selectedBrand?.value,
      );
      if (brand && brand.models) {
        const model = brand.models.find(
          (option: { value: string | undefined }) =>
            option.value === selectedModel?.value,
        );
        if (model && model.generations) {
          const generation = model.generations.find(
            (option: { value: string }) =>
              option.value === selectedGeneration.value,
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
        (option) => option.value === selectedBrand?.value,
      );
      if (brand && brand.models) {
        const model = brand.models.find(
          (option: { value: string | undefined }) =>
            option.value === selectedModel?.value,
        );
        if (model && model.generations) {
          const generation = model.generations.find(
            (option: { value: string | undefined }) =>
              option.value === selectedGeneration?.value,
          );
          if (generation && generation.versions) {
            const version = generation.versions.find(
              (option: { value: string }) =>
                option.value === selectedVersion.value,
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
      const price = parseFloat(formData.price);
      const mileage = parseFloat(formData.mileage);
      const yearbook = parseFloat(formData.yearbook);
      const phone = parseFloat(formData.phone);

      const advertData = {
        ...formData,
        createAdvert: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
        price: price,
        mileage: mileage,
        yearbook: yearbook,
        phone: phone,
      };

      const advertRef = await addDoc(collection(db, 'adverts'), advertData);
      if (selectedImages.length > EMPTY_VALUE) {
        const imageUrls = await uploadImagesToStorage(
          selectedImages,
          advertRef.id,
        );
        await updateDoc(advertRef, { images: imageUrls });
      }

      setAdvertAdded(true);
    } catch (error) {
      console.error('Error while adding advert: ', error);
    }
  };

  const handleBrandChange = (brand: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, brand: brand?.value || '' }));
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
  };

  const handleBodyChange = (body: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, body: body?.value || '' }));
    setSelectedBody(body);
  };

  const handleFuelChange = (fuel: SelectOptionProps | undefined) => {
    setFormData((prevData) => ({ ...prevData, fuel: fuel?.value || '' }));
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
      return (
        <p className="text-center my-10 uppercase">
          Your advert has been added!
        </p>
      );
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
    <main className="my-20">
      <header>
        <h3 className="text-center uppercase font-bold italic">
          Create new advert
        </h3>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <fieldset className="flex flex-row flex-wrap gap-2 my-4 p-4 justify-start items-center">
          <legend className="font-medium text-main text-lg text-center">
            Main Information
          </legend>
          <ImageUpload onImageSelect={handleImageSelect} />
          <BodySelect onChange={handleBodyChange} value={selectedBody} />
          <BrandSelect onChange={handleBrandChange} />
          <CarDataSelect
            filter="Model"
            value={selectedModel}
            options={getModelOptions()}
            onChange={(model: SelectOptionProps | undefined) => {
              mapField('model', model?.value || '');
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
              mapField('generation', generation?.value || '');
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
              mapField('version', version?.value || '');
              setSelectedVersion(version);
              setSelectedEngine(undefined);
            }}
          />
          <CarDataSelect
            filter="Engine"
            value={selectedEngine}
            options={getEngineOption()}
            onChange={(engine: SelectOptionProps | undefined) => {
              mapField('engine', engine?.value || '');
              setSelectedEngine(engine);
            }}
          />
          <FuelSelect onChange={handleFuelChange} value={selectedFuel} />
          <CustomSelect
            onChangeDrive={(drive: SelectOptionProps | undefined) => {
              mapField('drive', drive?.value || '');
              setSelectedDrive(drive);
            }}
            onChangeGearbox={(gearbox: SelectOptionProps | undefined) => {
              mapField('gearbox', gearbox?.value || '');
              setSelectedGearbox(gearbox);
            }}
            valueDrive={selectedDrive}
            valueGearbox={selectedGearbox}
          />
        </fieldset>
        <fieldset className="flex flex-row flex-wrap gap-2 justify-start items-center p-4">
          <legend className="text-main font-medium text-lg text-center">
            Other information
          </legend>
          <MyInput
            value={formData.yearbook}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField('yearbook', event.target.value);
            }}
            type="number"
            placeholder="Yearbook"
          />
          <MyInput
            value={formData.mileage}
            type="number"
            placeholder="Mileage"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField('mileage', event.target.value);
            }}
          />
          <MyInput
            type="date"
            value={formData.firstRegister}
            placeholder="First register"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField('firstRegister', event.target.value);
            }}
          />
          <MyInput
            placeholder="VIN"
            value={formData.vin}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField('vin', event.target.value);
            }}
            type="text"
          />
          <MyInput
            placeholder="Price"
            type="number"
            value={formData.price}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField('price', event.target.value);
            }}
          />
          <MyInput
            placeholder="Phone number"
            type="tel"
            value={formData.phone}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              mapField('phone', event.target.value);
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
        </fieldset>
        <p>
          <Result />
        </p>
        <Button
          variant="outlined"
          size="large"
          onClick={clearData}
          type="submit"
          sx={{
            margin: '50px auto 0',
            width: '150px',
            letterSpacing: '1px',
            fontWeight: 'bold',
            fontSize: '10px',
            borderColor: '#b78d20',
            color: '#b78d20',
            transition: 'scale .5s',
            ':hover': {
              borderColor: '#b78d20',
              scale: '1.2',
              background: 'none',
            },
          }}
        >
          Display
        </Button>
      </form>
    </main>
  );
}
