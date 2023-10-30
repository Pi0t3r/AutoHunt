export interface ImageUploadProps {
  onImageSelect: (filtes: FileList) => void;
}
export interface ProfileImageProps {
  userMail: string;
  selectedImage?: string | null;
}

