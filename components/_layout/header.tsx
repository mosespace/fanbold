import { siteConfig } from '@/lib/site-config';
import { PointerOff } from 'lucide-react';

export default function Header() {
  return (
    <div className="p-4 border-b border-gray-200 flex items-center gap-3 bg-white/80 backdrop-blur-lg">
      <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-sm">
        <PointerOff size={18} className="text-white" />
      </div>
      <div>
        <h1 className="text-lg font-bold uppercase tracking-wide text-gray-900">
          {siteConfig.name}.
        </h1>
        <p className="border-b border-2"></p>
      </div>
    </div>
  );
}
