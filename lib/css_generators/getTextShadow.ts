import { ShadowType } from '@/types/design';

export const getTextShadow = (type: ShadowType, color: string) => {
  switch (type) {
    case 'soft':
      return '2px 4px 12px rgba(0,0,0,0.2)';
    case 'hard':
      return `4px 4px 0px ${color}40`;
    case 'neon':
      return `0 0 10px ${color}, 0 0 20px ${color}`;
    default:
      return 'none';
  }
};
