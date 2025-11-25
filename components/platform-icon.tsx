import { Platform } from '@/types/design';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const PlatformIcon = ({
  platform,
  className,
  style,
}: {
  platform: Platform;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const Icon =
    {
      linkedin: Linkedin,
      twitter: Twitter,
      youtube: Youtube,
      instagram: Instagram,
      facebook: Facebook,
    }[platform] || Linkedin;
  return <Icon className={className} style={style} />;
};
