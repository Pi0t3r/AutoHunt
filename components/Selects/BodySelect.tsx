import React, { useState } from "react";
import { body } from "@/data/cars";
import { Select, SelectOption } from "../select/Select";

export const BodySelect = () => {
  const [selectedBody, setSelectedBody] = useState<SelectOption | undefined>(
    undefined
  );
  const handleBodyChange = (selectedBody: SelectOption | undefined) => {
    setSelectedBody(selectedBody);
  };
  return (
    <Select
      filter="Body"
      options={body}
      value={selectedBody}
      onChange={handleBodyChange}
    />
  );
};
