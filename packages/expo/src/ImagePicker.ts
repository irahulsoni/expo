import { NativeModules } from 'react-native';
import UnsupportedError from './UnsupportedError';

const {
  ExponentImagePicker = {
    get name() {
      return 'ExponentImagePicker';
    },
  },
} = NativeModules;

const MEDIA_TYPE_OPTIONS = {
  All: 'All',
  Videos: 'Videos',
  Images: 'Images',
};

type ImageInfo = {
  uri: string;
  width: number;
  height: number;
};

type ImageResult = { cancelled: true } | ({ cancelled: false } & ImageInfo);

type ImageLibraryOptions = {
  allowsEditing?: boolean;
  aspect?: [number, number];
  quality?: number;
  mediaTypes?: keyof (typeof MEDIA_TYPE_OPTIONS);
};

export async function launchImageLibraryAsync(
  options: ImageLibraryOptions = {}
): Promise<ImageResult> {
  if (!ExponentImagePicker.launchImageLibraryAsync) {
    throw new UnsupportedError('ImagePicker', 'launchImageLibraryAsync');
  }
  return ExponentImagePicker.launchImageLibraryAsync(options);
}

type CameraOptions = {
  allowsEditing?: boolean;
  aspect?: [number, number];
  quality?: number;
};

export async function launchCameraAsync(options: CameraOptions = {}): Promise<ImageResult> {
  if (!ExponentImagePicker.launchCameraAsync) {
    throw new UnsupportedError('ImagePicker', 'launchCameraAsync');
  }
  return ExponentImagePicker.launchCameraAsync(options);
}

export const MediaTypeOptions = MEDIA_TYPE_OPTIONS;
