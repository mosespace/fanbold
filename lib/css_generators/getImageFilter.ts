import { FilterType } from '@/types/design';

export const getImageFilter = (type: FilterType) => {
  switch (type) {
    case 'grayscale':
      return 'grayscale(100%)';
    case 'contrast':
      return 'contrast(150%) brightness(1.1)';
    case 'sepia':
      return 'sepia(80%)';
    default:
      return 'none';
  }
};
