'use client';

import { Layout, Palette, Sparkles, Type } from 'lucide-react';
import React from 'react';

export default function Navigation({
  activeTab,
  setActiveTab,
}: {
  activeTab: 'template' | 'style' | 'content' | 'presets';
  setActiveTab: React.Dispatch<
    React.SetStateAction<'template' | 'style' | 'content' | 'presets'>
  >;
}) {
  return (
    <div className="flex border-b">
      {[
        { id: 'template', icon: Layout, label: 'Layout' },
        { id: 'content', icon: Type, label: 'Text' },
        { id: 'style', icon: Palette, label: 'Style' },
        { id: 'presets', icon: Sparkles, label: 'Themes' },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as any)}
          className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all ${
            activeTab === tab.id
              ? 'text-primary bg-white border-b-2 border-primary/70'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <tab.icon size={16} />
          <span className="text-[10px] font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
