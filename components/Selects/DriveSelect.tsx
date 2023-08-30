import React, { useState } from "react";
import { drive } from "@/data/cars";
import { Select, SelectOption } from "../select/Select";

export const DriveSelect = () => {
  const [selectedDrive, setSelectedDrive] = useState<SelectOption | undefined>(
    undefined
  );

  const handleDriveChange = (drive: SelectOption | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      drive: drive?.value || "",
    }));
    setSelectedDrive(drive);
  };
  return <Select options={drive} filter="Drive" onChange={handleDriveChange} value={setSelectedDrive} />;
};
