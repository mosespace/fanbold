'use client';

import { Download } from 'lucide-react';
import { Button } from '../ui/button';

export default function DownloadBtn({
  handleDownload,
}: {
  handleDownload: () => Promise<void>;
}) {
  return (
    <div className="p-5 border-t border-gray-200 bg-white">
      <Button
        onClick={handleDownload}
        className="w-full py-5 font-semibold flex items-center justify-center gap-2 text-white transition shadow-sm"
      >
        <Download size={18} />
        Download PNG
      </Button>
    </div>
  );
}
