import React, { useState, useCallback } from 'react';
import { ImageUpload } from './components/ImageUpload';
import { EnhancementControls } from './components/EnhancementControls';
import { ImagePreview } from './components/ImagePreview';
import { EnhancementOptions, ImageState } from './types';
import { Wand2 } from 'lucide-react';

function App() {
  const [imageState, setImageState] = useState<ImageState>({
    original: null,
    enhanced: null,
    isProcessing: false,
    error: null,
  });

  const [options, setOptions] = useState<EnhancementOptions>({
    brightness: 0,
    contrast: 0,
    sharpness: 50,
    noiseReduction: 50,
  });

  const handleImageUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageState({
        original: e.target?.result as string,
        enhanced: null,
        isProcessing: false,
        error: null,
      });
    };
    reader.readAsDataURL(file);
  }, []);

  const handleEnhancementChange = useCallback((newOptions: EnhancementOptions) => {
    setOptions(newOptions);
    // In a real application, this is where you would call your AI enhancement API
    setImageState(prev => ({
      ...prev,
      isProcessing: true,
    }));

    // Simulating API call
    setTimeout(() => {
      setImageState(prev => ({
        ...prev,
        enhanced: prev.original,
        isProcessing: false,
      }));
    }, 1500);
  }, []);

  const handleDownload = useCallback(() => {
    if (imageState.enhanced) {
      const link = document.createElement('a');
      link.href = imageState.enhanced;
      link.download = 'enhanced-image.png';
      link.click();
    }
  }, [imageState.enhanced]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Wand2 className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-900">AI Image Enhancement</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {!imageState.original ? (
              <ImageUpload onImageUpload={handleImageUpload} />
            ) : (
              <ImagePreview
                original={imageState.original}
                enhanced={imageState.enhanced}
                isProcessing={imageState.isProcessing}
                onDownload={handleDownload}
              />
            )}
          </div>

          <div>
            <EnhancementControls
              options={options}
              onChange={handleEnhancementChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
