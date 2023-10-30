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
    <div>
      <label className="block mb-2 w-3/4 text-sm font-medium text-gray-900 dark:text-white">
        Upload multiple files
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          multiple
          onChange={handleImageSelect}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
