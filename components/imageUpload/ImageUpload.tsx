import { ImageUploadProps } from '@/types/ImageTypes';
import { ChangeEvent } from 'react';
const ImageUpload = ({ onImageSelect }: ImageUploadProps) => {
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
