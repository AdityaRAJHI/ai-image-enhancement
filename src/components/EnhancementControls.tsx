import React from 'react';
import { EnhancementOptions } from '../types';

interface EnhancementControlsProps {
  options: EnhancementOptions;
  onChange: (options: EnhancementOptions) => void;
}

export function EnhancementControls({ options, onChange }: EnhancementControlsProps) {
  const handleChange = (key: keyof EnhancementOptions) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onChange({ ...options, [key]: value });
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Enhancement Controls</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brightness ({options.brightness})
          </label>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            value={options.brightness}
            onChange={handleChange('brightness')}
            min={-100}
            max={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contrast ({options.contrast})
          </label>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            value={options.contrast}
            onChange={handleChange('contrast')}
            min={-100}
            max={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sharpness ({options.sharpness})
          </label>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            value={options.sharpness}
            onChange={handleChange('sharpness')}
            min={0}
            max={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Noise Reduction ({options.noiseReduction})
          </label>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            value={options.noiseReduction}
            onChange={handleChange('noiseReduction')}
            min={0}
            max={100}
          />
        </div>
      </div>
    </div>
  );
}
