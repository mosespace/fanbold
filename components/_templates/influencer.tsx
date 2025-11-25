'use client';

import { PlatformIcon } from '@/components/platform-icon';
import { getBackgroundStyle } from '@/lib/css_generators/getBackgroundStyle';
import { getImageFilter } from '@/lib/css_generators/getImageFilter';
import { getPatternStyle } from '@/lib/css_generators/getPatternStyle';
import { DesignState } from '@/types/design';
import { ImageIcon } from 'lucide-react';

export default function InfluencerTemplate({ data }: { data: DesignState }) {
  return (
    <div
      className="w-full h-full flex flex-col relative overflow-hidden"
      style={getBackgroundStyle(data)}
    >
      {data.pattern !== 'none' && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={getPatternStyle(data.pattern, '#ffffff')}
        />
      )}

      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(4)].map((_, i) => (
          <PlatformIcon
            key={i}
            platform={data.platform}
            className="absolute w-48 h-48 blur-2xl"
            style={{
              color: i % 2 === 0 ? data.accentColor : 'white',
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="relative mb-6 group transition-transform duration-500">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-60"
            style={{ backgroundColor: data.accentColor }}
          />

          <div className="w-56 h-56 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-gray-100 flex items-center justify-center relative z-10">
            {data.image ? (
              <img
                src={data.image}
                alt="User"
                className="w-full h-full object-cover"
                style={{ filter: getImageFilter(data.imageFilter) }}
              />
            ) : (
              <div className="flex flex-col items-center gap-2 opacity-60">
                <ImageIcon size={32} className="text-white" />
                <span className="text-white text-xs">Upload Photo</span>
              </div>
            )}
          </div>

          {data.name && (
            <div className="absolute bottom-4 -right-12 bg-white/95 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg border border-gray-200 text-center min-w-40 rotate-2">
              <p className="font-semibold text-gray-900 text-lg leading-none truncate">
                {data.name}
              </p>
            </div>
          )}
        </div>

        <div className="text-center relative z-20">
          <h2
            className="text-5xl md:text-6xl text-white font-normal -mb-5 opacity-90"
            style={{
              fontFamily: 'cursive',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            {data.subLabel}
          </h2>

          <h1
            className="text-[8rem] md:text-[11rem] font-black leading-none tracking-tight"
            style={{
              fontFamily: data.fontFamily,
              color: 'white',
              textShadow: `0px 20px 40px rgba(0,0,0,0.45)`,
            }}
          >
            {data.count}
          </h1>

          <h2
            className="text-5xl md:text-6xl font-black uppercase tracking-[0.25em] -mt-2.5"
            style={{
              fontFamily: data.fontFamily,
              color: 'transparent',
              WebkitTextStroke: '2px white',
            }}
          >
            {data.label}
          </h2>
        </div>

        {data.showIcon && (
          <div className="absolute bottom-12 right-12 bg-white rounded-2xl p-4 shadow-xl">
            <PlatformIcon
              platform={data.platform}
              className="w-10 h-10"
              style={{ color: data.accentColor }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
