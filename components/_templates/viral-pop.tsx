'use client';

import { PlatformIcon } from '@/components/platform-icon';
import { DesignState } from '@/types/design';

export default function ViralPopTemplate({ data }: { data: DesignState }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: data.backgroundColor }}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-24 origin-bottom rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? 'white' : data.accentColor,
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${
              i * 30
            }deg) translateY(-180px)`,
            opacity: 0.4,
          }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute text-2xl animate-pulse"
          style={{
            color: 'white',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.6,
          }}
        >
          ✦
        </div>
      ))}

      <div
        className="relative bg-white text-center p-10 md:p-12 rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.18)] max-w-lg w-full mx-6 md:mx-12 border-[3px]"
        style={{ borderColor: data.textColor }}
      >
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-b-[3px] border-r-[3px] rotate-45"
          style={{ borderColor: data.textColor }}
        />

        <h3
          className="text-xl md:text-2xl font-semibold uppercase mb-2 tracking-tight"
          style={{ color: data.backgroundColor, fontFamily: data.fontFamily }}
        >
          {data.subLabel}
        </h3>

        <h1
          className="text-[4.5rem] md:text-[6rem] leading-none font-black mb-2 tracking-tight"
          style={{ color: data.accentColor, fontFamily: data.fontFamily }}
        >
          {data.count}
        </h1>

        <h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-[0.25em]"
          style={{ color: data.backgroundColor, fontFamily: data.fontFamily }}
        >
          {data.label}
        </h2>

        {data.showIcon && (
          <div
            className="absolute -top-7 -right-7 bg-white p-3 rounded-full border-[3px] shadow-md"
            style={{ borderColor: data.textColor }}
          >
            <PlatformIcon
              platform={data.platform}
              className="w-8 h-8"
              style={{ color: data.accentColor }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
