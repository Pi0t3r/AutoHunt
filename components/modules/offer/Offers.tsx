/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./offers.module.css";
import React, { useEffect, useState } from "react";
import { Select } from "../select/Select";
import { body, options, fuelOptions } from "../../data/cars";
import Link from "next/link";
import advert from "@/components/data/advertisement";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import AdvertCard from "@/components/advertCart";

type SelectOption = {
  value: string;
  generations?: SelectOption[] | undefined;
  versions?: SelectOption[] | undefined;
  engine?: SelectOption[] | undefined;
  models?: SelectOption[] | undefined;
};

export default function Offers() {
  const [numAds, setNumAds] = useState(advert.length);
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
  const [filteredAds, setFilteredAds] = useState(advert);
  const [carAdvert, setCarAdvert] = useState([]);
  useEffect(() => {
    const getCarAdvert = async () => {
      const advertCollection = collection(db, "CarOffers");
      const advertSnapshot = await getDocs(advertCollection);
      const advert = advertSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCarAdvert(advert);
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
  const handleFilter = () => {
    let filtered = advert;
    if (selectedBrand) {
      filtered = filtered.filter((ad) => ad.brand === selectedBrand.value);
    }
    if (selectedModel) {
      filtered = filtered.filter((ad) => ad.model === selectedModel.value);
    }
    if (selectedGeneration) {
      filtered = filtered.filter(
        (ad) => ad.generation === selectedGeneration.value
      );
    }
    if (selectedVersion) {
      filtered = filtered.filter((ad) => ad.version === selectedVersion.value);
    }
    if (selectedEngine) {
      filtered = filtered.filter((ad) => ad.engine === selectedEngine.value);
    }
    if (selectedBody) {
      filtered = filtered.filter((ad) => ad.body === selectedBody.value);
    }
    if (selectedFuel) {
      filtered = filtered.filter((ad) => ad.fuel === selectedFuel.value);
    }
    setFilteredAds(filtered);
  };
  const handleBrandChange = (brand: SelectOption | undefined) => {
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
    const filtered = advert.filter((ad) => ad.brand === brand?.value);

    setNumAds(filtered.length);
  };
  const handleModelChange = (model: SelectOption | undefined) => {
    setSelectedModel(model);
    setSelectedGeneration(undefined);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
    const filtered = advert.filter((ad) => ad.model === model?.value);

    setNumAds(filtered.length);
  };
  const handleBodyChange = (selectedBody: SelectOption | undefined) => {
    setSelectedBody(selectedBody);

    const filtered = advert.filter((ad) => ad.body === selectedBody?.value);

    setNumAds(filtered.length);
  };
  const handleFuelChange = (selectedFuel: SelectOption | undefined) => {
    setSelectedFuel(selectedFuel);
    const filtered = advert.filter((ad) => ad.fuel === selectedFuel?.value);

    setNumAds(filtered.length);
  };
  const handleGenerationChange = (generation: SelectOption | undefined) => {
    setSelectedGeneration(generation);
    setSelectedVersion(undefined);
    setSelectedEngine(undefined);
    const filtered = advert.filter((ad) => ad.generation === generation?.value);

    setNumAds(filtered.length);
  };
  const handleVersionChange = (version: SelectOption | undefined) => {
    setSelectedVersion(version);
    setSelectedEngine(undefined);
    const filtered = advert.filter((ad) => ad.version === version?.value);

    setNumAds(filtered.length);
  };
  const handleEngineChange = (engine: SelectOption | undefined) => {
    setSelectedEngine(engine);
    const filtered = advert.filter((ad) => ad.engine === engine?.value);

    setNumAds(filtered.length);
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
        <button className={styles.button} onClick={handleFilter}>
          Show {numAds} advertisements
        </button>
        <Link href={"/create"}>Add new Advert</Link>
      </div>
      <div className={styles.offers}>
        <ul>
          {/* {carAdvert.map((item) => {
            <li>item.brand ? <AdvertCard props={item}></AdvertCard></li> : null;
          })} */}
          {/* {filteredAds.map((post) => (
            <li key={post.id}>
              <Link href={"/advert/" + post.id} key={post.id}>
                <div className={styles.offer}>
                  <div className={styles.img}>
                    <Image
                      src={post.images[0]}
                      width={200}
                      height={200}
                      alt={`car images ${post.brand} ${post.model}`}
                    />
                  </div>
                  <div className={styles.info}>
                    <p className={styles.title}>
                      {post.brand} {post.model}{" "}
                      {post.generation ? post.generation.split(" ")[0] : ""}{" "}
                      {post.version}
                    </p>
                    <p>
                      {post.productionYear} - {post.mileage}km - {post.engine}
                    </p>
                    <p>Damaged: {post.isDamage ? "Yes" : "No"}</p>
                    <p className={styles.price}>
                      {post.price && post.price.toLocaleString()} PLN
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
