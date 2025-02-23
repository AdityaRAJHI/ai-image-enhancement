import React from 'react';
import { Download } from 'lucide-react';

interface ImagePreviewProps {
  original: string | null;
  enhanced: string | null;
  isProcessing: boolean;
  onDownload: () => void;
}

export function ImagePreview({ original, enhanced, isProcessing, onDownload }: ImagePreviewProps) {
  if (!original) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Original Image</h3>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={original}
              alt="Original"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Enhanced Image</h3>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {isProcessing ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : enhanced ? (
              <img
                src={enhanced}
                alt="Enhanced"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Adjust parameters to see enhancement
              </div>
            )}
          </div>
        </div>
      </div>

      {enhanced && (
        <button
          onClick={onDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Enhanced Image
        </button>
      )}
    </div>
  );
}
