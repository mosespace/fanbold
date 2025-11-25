'use client';

import { PlatformIcon } from '@/components/platform-icon';
import { getBackgroundStyle } from '@/lib/css_generators/getBackgroundStyle';
import { getPatternStyle } from '@/lib/css_generators/getPatternStyle';
import { getTextShadow } from '@/lib/css_generators/getTextShadow';
import { DesignState } from '@/types/design';

export default function CorporateTemplate({ data }: { data: DesignState }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden text-center"
      style={getBackgroundStyle(data)}
    >
      {data.pattern !== 'none' && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={getPatternStyle(data.pattern, data.textColor)}
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center p-12">
        <div
          className="absolute inset-0 opacity-20 rotate-6 rounded-[3rem] backdrop-blur-sm border border-white/30"
          style={{ backgroundColor: data.accentColor }}
        />
        <div
          className="absolute inset-4 opacity-30 -rotate-6 rounded-4xl border border-white/20"
          style={{ backgroundColor: data.accentColor }}
        />

        <h3
          className="uppercase tracking-[0.28em] font-semibold mb-6 relative z-10 text-sm md:text-xl"
          style={{
            color: data.textColor,
            fontFamily: data.fontFamily,
            textShadow: getTextShadow(data.textShadow, data.textColor),
          }}
        >
          {data.subLabel}
        </h3>

        <div className="relative z-10">
          <h1
            className="text-[6.5rem] md:text-[9rem] leading-[0.9] font-black"
            style={{
              color: 'white',
              fontFamily: data.fontFamily,
              textShadow: '0px 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            {data.count}
          </h1>
          <span className="absolute -right-6 top-4 md:-right-8 md:top-4 text-4xl md:text-5xl font-bold text-white/80">
            +
          </span>
        </div>

        <div
          className="bg-white/95 backdrop-blur px-8 md:px-10 py-3 mt-8 shadow-md rounded-full border border-gray-100"
          style={{ borderColor: data.accentColor }}
        >
          <h2
            className="text-xl md:text-3xl font-semibold uppercase tracking-[0.3em]"
            style={{
              color: data.backgroundColor,
              fontFamily: data.fontFamily,
            }}
          >
            {data.label}
          </h2>
        </div>

        <div className="flex items-center gap-3 mt-10 relative z-10 bg-black/5 px-6 py-2 rounded-full backdrop-blur-sm border border-white/40">
          <span
            className="uppercase tracking-[0.2em] font-medium text-[11px]"
            style={{ color: data.textColor }}
          >
            On
          </span>
          {data.showIcon && (
            <PlatformIcon
              platform={data.platform}
              className="w-5 h-5"
              style={{ color: data.textColor }}
            />
          )}
          <span
            className="uppercase tracking-[0.2em] font-semibold text-[11px]"
            style={{ color: data.textColor }}
          >
            {data.platform}
          </span>
        </div>
      </div>
    </div>
  );
}
