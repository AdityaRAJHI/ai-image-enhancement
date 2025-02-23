export interface EnhancementOptions {
  brightness: number;
  contrast: number;
  sharpness: number;
  noiseReduction: number;
}

export interface ImageState {
  original: string | null;
  enhanced: string | null;
  isProcessing: boolean;
  error: string | null;
}
