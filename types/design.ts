export type Platform =
  | 'linkedin'
  | 'twitter'
  | 'youtube'
  | 'instagram'
  | 'facebook';
export type TemplateType = 'corporate' | 'viral' | 'influencer';
export type PatternType = 'none' | 'dots' | 'grid' | 'noise';
export type ShadowType = 'none' | 'soft' | 'hard' | 'neon';
export type FilterType = 'none' | 'grayscale' | 'contrast' | 'sepia';

export interface DesignState {
  count: string;
  label: string;
  subLabel: string;
  platform: Platform;
  // Colors
  accentColor: string;
  backgroundType: 'solid' | 'gradient';
  backgroundColor: string;
  gradientEnd: string;
  textColor: string;
  // Typography & Effects
  fontFamily: string;
  textShadow: ShadowType;
  // Visuals
  pattern: PatternType;
  showIcon: boolean;
  // Image Specific
  image: string | null;
  imageFilter: FilterType;
  name: string;
}
