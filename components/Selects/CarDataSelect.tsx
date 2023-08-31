import React, { useState } from "react";
import { SelectOption, Select } from "../select/Select";
import { options } from "@/data/cars";

interface CarDataSelectProps {
  filter: string;
  value: SelectOption | undefined;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
}

export const CarDataSelect: React.FC<CarDataSelectProps> = ({
  filter,
  value,
  options,
  onChange,
}) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      filter={filter}
    />
  );
};
// interface CarDataSelectProps {
//   filter: string;
//   value: SelectOption | undefined;
//   onChange: (value: SelectOption | undefined) => void;
//   level?: string;
//   options: SelectOption[];
// }

// export const CarDataSelect: React.FC<CarDataSelectProps> = ({
//   filter,
//   value,
//   onChange,
//   level,
// }) => {
//   const [selectedBrand, setSelectedBrand] = useState<SelectOption | undefined>(
//     undefined
//   );
//   const [selectedModel, setSelectedModel] = useState<SelectOption | undefined>(
//     undefined
//   );
//   const [selectedGeneration, setSelectedGeneration] = useState<
//     SelectOption | undefined
//   >(undefined);
//   const [selectedVersion, setSelectedVersion] = useState<
//     SelectOption | undefined
//   >(undefined);

//   const [selectedEngine, setSelectedEngine] = useState<
//     SelectOption | undefined
//   >(undefined);
//   const getLevelOption = () => {
//     switch (level) {
//       case "Model":
//         if (selectedBrand && selectedBrand.value) {
//           const brand = options.find(
//             (option) => option.value === selectedBrand.value
//           );
//           return brand ? brand.models || [] : [];
//         }
//         return [];
//         break;
//       case "Generation":
//         if (selectedModel && selectedModel.value) {
//           const brand = options.find(
//             (option) => option.value === selectedBrand?.value
//           );
//           if (brand && brand.models) {
//             const model = brand.models.find(
//               (option) => option.value === selectedModel.value
//             );
//             return model ? model.generations || [] : [];
//           }
//         }
//         break;
//       case "Version":
//         if (selectedGeneration && selectedGeneration.value) {
//           const brand = options.find(
//             (option) => option.value === selectedBrand?.value
//           );
//           if (brand && brand.models) {
//             const model = brand.models.find(
//               (option) => option.value === selectedModel?.value
//             );
//             if (model && model.generations) {
//               const generation = model.generations.find(
//                 (option) => option.value === selectedGeneration.value
//               );
//               return generation ? generation.versions || [] : [];
//             }
//           }
//         }
//         break;
//       case "Engine":
//         if (selectedVersion && selectedVersion.value) {
//           const brand = options.find(
//             (option) => option.value === selectedBrand?.value
//           );
//           if (brand && brand.models) {
//             const model = brand.models.find(
//               (option) => option.value === selectedModel?.value
//             );
//             if (model && model.generations) {
//               const generation = model.generations.find(
//                 (option) => option.value === selectedGeneration?.value
//               );
//               if (generation && generation.versions) {
//                 const version = generation.versions.find(
//                   (option) => option.value === selectedVersion.value
//                 );
//                 return version ? version.value || [] : [];
//               }
//             }
//           }
//         }
//         return [];
//         break;
//     }
//   };
//   const filterLevel = getLevelOption();
//   return (
//     <Select
//       options={options}
//       value={value}
//       onChange={onChange}
//       filter={filter}
//     />
//   );
// };
