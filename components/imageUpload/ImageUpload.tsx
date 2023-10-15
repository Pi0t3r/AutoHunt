import { ImageUploadProps } from "@/types/myTypes";
import React, { ChangeEvent } from "react";
const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      onImageSelect(files);
    }
  };
  return (
    <>
      <input
        type="file"
        multiple
        onChange={handleImageSelect}
        required
        className="w-[90%] max-w-[300px]"
      />
    </>
  );
};

export default ImageUpload;
