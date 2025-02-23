import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

export function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onImageUpload(acceptedFiles[0]);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center text-gray-600">
        <Upload className="w-12 h-12 mb-4" />
        <p className="text-lg font-medium mb-2">
          {isDragActive ? 'Drop the image here' : 'Drag & drop an image here'}
        </p>
        <p className="text-sm text-gray-500">or click to select a file</p>
      </div>
    </div>
  );
}
