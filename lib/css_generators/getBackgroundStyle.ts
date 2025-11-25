import { DesignState } from '@/types/design';

export const getBackgroundStyle = (data: DesignState) => {
  if (data.backgroundType === 'gradient') {
    return {
      background: `linear-gradient(135deg, ${data.backgroundColor}, ${data.gradientEnd})`,
    };
  }
  return { backgroundColor: data.backgroundColor };
};
