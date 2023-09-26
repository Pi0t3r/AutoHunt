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
    <div>
      <input type="file" multiple onChange={handleImageSelect} required />
    </div>
  );
};

export default ImageUpload;
