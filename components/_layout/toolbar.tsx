import {
  ChevronsRightLeft,
  Github,
  Monitor,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { HandIcon, RotateCcwIcon } from 'lucide-react';
import Link from 'next/link';

export default function Toolbar({
  zoom,
  canvasWidth,
  canvasHeight,
  resetView,
  setZoom,
}: {
  setZoom: (value: React.SetStateAction<number>) => void;
  zoom: number;
  resetView: () => void;
  canvasWidth: number;
  canvasHeight: number;
}) {
  return (
    <div className="h-14 border-b border-gray-200 bg-white flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1 border border-gray-200">
          <button
            onClick={() => setZoom((z) => Math.max(0.2, z - 0.1))}
            className="p-1.5 hover:bg-white rounded-full text-gray-500 hover:text-gray-900"
          >
            <ZoomOut size={16} />
          </button>
          <span className="text-xs font-mono w-12 text-center text-gray-600">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={() => setZoom((z) => Math.min(2, z + 0.1))}
            className="p-1.5 hover:bg-white rounded-full text-gray-500 hover:text-gray-900"
          >
            <ZoomIn size={16} />
          </button>
        </div>
        {/* <button
          onClick={() => setZoom(0.6)}
          className="text-xs text-gray-500 hover:text-gray-900 underline"
        >
          Fit
        </button> */}

        <Button
          className="shadow-none border-0"
          variant="outline"
          size="icon"
          onClick={resetView}
        >
          <ChevronsRightLeft className="h-10 w-10" />
          {/* Fit */}
        </Button>

        <div>
          <Button
            className="shadow-none border-0"
            variant="outline"
            size="icon"
            onClick={resetView}
          >
            <RotateCcwIcon className="h-4 w-4" />
          </Button>
          <Button
            className="shadow-none border-0"
            variant="outline"
            size="icon"
          >
            <HandIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3 text-gray-500 text-xs font-medium">
        <Link
          href="https://github.com/mosespace/milestone-maker"
          target="_black"
          className="inline-flex items-center mr-6  text-black"
        >
          <Github className="h-5" /> GITHUB
        </Link>
        <span className="flex items-center gap-1">
          <Monitor size={14} /> {canvasWidth}x{canvasHeight}px
        </span>
      </div>
    </div>
  );
}
