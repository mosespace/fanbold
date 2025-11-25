'use client';

import { FONTS, PRESETS } from '@/lib/constants';
import {
  DesignState,
  FilterType,
  PatternType,
  Platform,
  ShadowType,
  TemplateType,
} from '@/types/design';
import { Check, Grid, Upload } from 'lucide-react';
import React from 'react';
import ColorPicker from '../color-picker';
import { PlatformIcon } from '../platform-icon';

export default function ControlCenter({
  activeTab,
  design,
  applyPreset,
  fileInputRef,
  handleImageUpload,
  setSelectedTemplate,
  selectedTemplate,
  setCanvasSize,
  updatePlatformColors,
  canvasSize,
  setDesign,
}: {
  activeTab: 'template' | 'content' | 'style' | 'presets';
  design: DesignState;
  applyPreset: (preset: {
    name: string;
    bg: string;
    grad: string;
    accent: string;
    text: string;
  }) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<TemplateType>>;
  selectedTemplate: TemplateType;
  setCanvasSize: React.Dispatch<React.SetStateAction<'square' | 'story'>>;
  updatePlatformColors: (platform: Platform) => void;
  canvasSize: 'square' | 'story';
  setDesign: React.Dispatch<React.SetStateAction<DesignState>>;
}) {
  return (
    <div className="flex-1 overflow-y-auto p-5 space-y-8">
      {/* TAB: TEMPLATE */}
      {activeTab === 'template' && (
        <div className="space-y-4">
          <label className="text-xs py-2 font-semibold text-gray-500 uppercase">
            Select Template
          </label>

          <div className="grid grid-cols-1 gap-3">
            {[
              {
                id: 'corporate',
                name: 'Corporate Hex',
                desc: 'Professional & clean',
                color: 'bg-primary',
              },
              {
                id: 'viral',
                name: 'Viral Pop',
                desc: 'Fun & energetic',
                color: 'bg-[#FF9F1C]',
              },
              {
                id: 'influencer',
                name: 'Influencer 3D',
                desc: 'Photo & gradient',
                color: 'bg-[#011627]',
              },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTemplate(t.id as TemplateType)}
                className={`relative p-3 rounded-md border text-left transition-all overflow-hidden group ${
                  selectedTemplate === t.id
                    ? 'border-primary bg-card'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${t.color}`}
                />
                <div className="pl-3">
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-xs text-gray-500">{t.desc}</p>
                </div>
                {selectedTemplate === t.id && (
                  <Check
                    size={16}
                    className="absolute top-3 right-3 text-primary"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200">
            <label className="text-xs font-semibold text-gray-500 uppercase block mb-3">
              Canvas Size
            </label>
            <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
              <button
                onClick={() => setCanvasSize('square')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-lg ${
                  canvasSize === 'square'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                1:1 Square
              </button>
              <button
                onClick={() => setCanvasSize('story')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-lg ${
                  canvasSize === 'story'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                9:16 Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB: CONTENT */}
      {activeTab === 'content' && (
        <div className="space-y-6">
          {/* Platform */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase">
              Platform
            </label>
            <div className="flex gap-1.5 bg-gray-100 p-1.5 rounded-xl overflow-x-auto">
              {(
                [
                  'linkedin',
                  'twitter',
                  'instagram',
                  'youtube',
                  'facebook',
                ] as Platform[]
              ).map((p) => (
                <button
                  key={p}
                  onClick={() => updatePlatformColors(p)}
                  className={`p-2 rounded-lg flex justify-center items-center transition-all ${
                    design.platform === p
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  title={p}
                >
                  <PlatformIcon platform={p} className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Text Fields */}
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Main Statistic</label>
              <input
                type="text"
                value={design.count}
                onChange={(e) =>
                  setDesign({ ...design, count: e.target.value })
                }
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-mono"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Top Label</label>
                <input
                  type="text"
                  value={design.subLabel}
                  onChange={(e) =>
                    setDesign({ ...design, subLabel: e.target.value })
                  }
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Bottom Label</label>
                <input
                  type="text"
                  value={design.label}
                  onChange={(e) =>
                    setDesign({ ...design, label: e.target.value })
                  }
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                />
              </div>
            </div>

            {selectedTemplate === 'influencer' && (
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Handle / Name</label>
                <input
                  type="text"
                  value={design.name}
                  onChange={(e) =>
                    setDesign({ ...design, name: e.target.value })
                  }
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                />
              </div>
            )}
          </div>

          {/* Upload */}
          {selectedTemplate === 'influencer' && (
            <div className="pt-4 border-t border-gray-200">
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-2">
                Profile Photo
              </label>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 border border-dashed border-gray-300 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition text-gray-500 hover:text-gray-800"
              >
                <Upload size={16} />
                <span className="text-sm">Upload Image</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />

              {design.image && (
                <div className="mt-4 space-y-2">
                  <label className="text-xs text-gray-500">Image Filter</label>
                  <div className="flex gap-2 flex-wrap">
                    {['none', 'grayscale', 'contrast', 'sepia'].map((f) => (
                      <button
                        key={f}
                        onClick={() =>
                          setDesign({
                            ...design,
                            imageFilter: f as FilterType,
                          })
                        }
                        className={`px-2 py-1 text-[10px] rounded-full uppercase border ${
                          design.imageFilter === f
                            ? 'bg-primary border-primary text-white'
                            : 'border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* TAB: STYLE */}
      {activeTab === 'style' && (
        <div className="space-y-6">
          {/* Background Controls */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Background
              </label>
              <div className="flex gap-1 bg-gray-100 p-1 rounded-full">
                <button
                  onClick={() =>
                    setDesign({ ...design, backgroundType: 'solid' })
                  }
                  className={`p-1 rounded-full ${
                    design.backgroundType === 'solid'
                      ? 'bg-white shadow-sm'
                      : 'text-gray-500'
                  }`}
                >
                  <div className="w-3 h-3 bg-gray-900 rounded-full" />
                </button>
                <button
                  onClick={() =>
                    setDesign({ ...design, backgroundType: 'gradient' })
                  }
                  className={`p-1 rounded-full ${
                    design.backgroundType === 'gradient'
                      ? 'bg-white shadow-sm'
                      : 'text-gray-500'
                  }`}
                >
                  <div className="w-3 h-3 bg-linear-to-br from-gray-900 to-gray-400 rounded-full" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ColorPicker
                label="Primary"
                value={design.backgroundColor}
                onChange={(v) => setDesign({ ...design, backgroundColor: v })}
              />
              {design.backgroundType === 'gradient' && (
                <ColorPicker
                  label="Secondary"
                  value={design.gradientEnd}
                  onChange={(v) => setDesign({ ...design, gradientEnd: v })}
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <ColorPicker
              label="Accent"
              value={design.accentColor}
              onChange={(v) => setDesign({ ...design, accentColor: v })}
            />
            <ColorPicker
              label="Text"
              value={design.textColor}
              onChange={(v) => setDesign({ ...design, textColor: v })}
            />
          </div>

          {/* Typography */}
          <div className="space-y-2 pt-4 border-t border-gray-200">
            <label className="text-xs font-semibold text-gray-500 uppercase">
              Typography
            </label>
            <select
              value={design.fontFamily}
              onChange={(e) =>
                setDesign({ ...design, fontFamily: e.target.value })
              }
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            >
              {FONTS.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          {/* Effects */}
          <div className="space-y-2">
            <label className="text-xs text-gray-500">Text Shadow</label>
            <div className="flex gap-2">
              {['none', 'soft', 'hard', 'neon'].map((s) => (
                <button
                  key={s}
                  onClick={() =>
                    setDesign({ ...design, textShadow: s as ShadowType })
                  }
                  className={`flex-1 py-1.5 text-[10px] rounded-full uppercase border transition-all ${
                    design.textShadow === s
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'border-gray-300 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Texture/Pattern */}
          <div className="space-y-2 pt-4 border-t border-gray-200">
            <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
              <Grid size={12} /> Texture
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['none', 'dots', 'grid', 'noise'].map((p) => (
                <button
                  key={p}
                  onClick={() =>
                    setDesign({ ...design, pattern: p as PatternType })
                  }
                  className={`py-2 rounded-lg border text-[10px] uppercase font-medium transition-all ${
                    design.pattern === p
                      ? 'border-primary bg-blue-50 text-primary'
                      : 'border-gray-300 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between py-2 mt-2">
            <span className="text-xs font-medium text-gray-600">
              Show Platform Icon
            </span>
            <button
              onClick={() =>
                setDesign({ ...design, showIcon: !design.showIcon })
              }
              className={`w-10 h-5 rounded-full p-0.5 transition-colors ${
                design.showIcon ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                  design.showIcon ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      )}

      {/* TAB: PRESETS */}
      {activeTab === 'presets' && (
        <div className="space-y-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            One-Click Themes
          </label>
          <div className="grid grid-cols-1 gap-3">
            {PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition group"
              >
                <div
                  className="w-10 h-10 rounded-full border border-white/40 shadow-sm relative overflow-hidden"
                  style={{
                    background: `linear-gradient(to bottom right, ${preset.bg}, ${preset.grad})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white text-[8px] font-bold">
                    Aa
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-950">
                    {preset.name}
                  </h4>
                  <div className="flex gap-1 mt-1">
                    <div
                      className="w-3 h-3 rounded-full border border-gray-200"
                      style={{ background: preset.accent }}
                    />
                    <div
                      className="w-3 h-3 rounded-full border border-gray-200"
                      style={{ background: preset.text }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
