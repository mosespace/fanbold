'use client';

import ControlCenter from '@/components/_layout/control-center';
import DownloadBtn from '@/components/_layout/download-btn';
import Header from '@/components/_layout/header';
import Navigation from '@/components/_layout/navigation';
import Toolbar from '@/components/_layout/toolbar';
import CorporateTemplate from '@/components/_templates/corporate';
import InfluencerTemplate from '@/components/_templates/influencer';
import ViralPopTemplate from '@/components/_templates/viral-pop';
import { PRESETS } from '@/lib/constants';
import { DesignState, Platform, TemplateType } from '@/types/design';
import { toast } from '@mosespace/toast';
import { toPng } from 'html-to-image';
import React, { useRef, useState } from 'react';

export default function FollowerCountDesigner() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<
    'template' | 'content' | 'style' | 'presets'
  >('template');
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateType>('viral');
  const [zoom, setZoom] = useState(0.65);
  const [canvasSize, setCanvasSize] = useState<'square' | 'story'>('square');

  const viewportRef = useRef<HTMLDivElement>(null);

  // Pan state
  const [isPanning, setIsPanning] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const [design, setDesign] = useState<DesignState>({
    count: '5000K',
    label: 'Followers',
    subLabel: 'Thank you for',
    platform: 'linkedin',
    backgroundType: 'solid',
    backgroundColor: '#0077b5',
    gradientEnd: '#00a0dc',
    accentColor: '#00ebff',
    textColor: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    textShadow: 'soft',
    pattern: 'none',
    showIcon: true,
    image: null,
    imageFilter: 'none',
    name: '@mosespace',
  });

  const canvasWidth = 1080;
  const canvasHeight = canvasSize === 'square' ? 1080 : 1920;

  const applyPreset = (preset: (typeof PRESETS)[0]) => {
    setDesign((prev) => ({
      ...prev,
      backgroundColor: preset.bg,
      gradientEnd: preset.grad,
      backgroundType: 'gradient',
      accentColor: preset.accent,
      textColor: preset.text,
    }));
  };

  const updatePlatformColors = (platform: Platform) => {
    let bg = '#000000',
      grad = '#333333',
      accent = '#ffffff';

    switch (platform) {
      case 'linkedin':
        bg = '#0a66c2';
        grad = '#37a1f2';
        accent = '#0a66c2';
        break;
      case 'twitter':
        bg = '#000000';
        grad = '#1DA1F2';
        accent = '#1DA1F2';
        break;
      case 'youtube':
        bg = '#ff0000';
        grad = '#cc0000';
        accent = '#ffffff';
        break;
      case 'instagram':
        bg = '#f58529';
        grad = '#dd2a7b';
        accent = '#8134af';
        break;
      case 'facebook':
        bg = '#1877F2';
        grad = '#3b5998';
        accent = '#ffffff';
        break;
    }
    setDesign((prev) => ({
      ...prev,
      platform,
      backgroundColor: bg,
      gradientEnd: grad,
      accentColor: accent,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDesign((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      toast.information('Generating image...');

      // Use html-to-image instead of html2canvas
      const dataUrl = await toPng(canvasRef.current, {
        quality: 1,
        pixelRatio: 2,
        width: canvasWidth,
        height: canvasHeight,
        cacheBust: true,
        style: {
          transform: 'none',
          transformOrigin: 'top left',
        },
      });

      const link = document.createElement('a');
      link.download = `milestone-${design.platform}-${design.count.replace(
        /[^a-zA-Z0-9]/g,
        ''
      )}.png`;
      link.href = dataUrl;
      link.click();
      toast.success('Successfully saved your image');
    } catch (err) {
      console.error('Download error:', err);
      toast.error(
        `Error generating image: ${
          err instanceof Error ? err.message : 'Please try again'
        }`
      );
    }
  };

  // Scroll wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    setZoom((z) => Math.min(3, Math.max(0.2, z + delta)));
  };

  // Start panning
  const startPan = (e: React.MouseEvent) => {
    setIsPanning(true);
    setOrigin({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  // Panning move
  const doPan = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setPan({
      x: e.clientX - origin.x,
      y: e.clientY - origin.y,
    });
  };

  // Stop panning
  const stopPan = () => setIsPanning(false);

  // Reset zoom/pan
  const resetView = () => {
    setZoom(0.65);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="h-screen w-full bg-[#f5f5f7] flex text-gray-900 overflow-hidden">
      {/* --- SIDEBAR --- */}
      <div className="w-80 flex flex-col border-r border-gray-200 bg-white z-20">
        {/* Header */}
        <Header />

        {/* Navigation */}
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Controls Content */}
        <ControlCenter
          activeTab={activeTab}
          design={design}
          applyPreset={applyPreset}
          fileInputRef={fileInputRef}
          handleImageUpload={handleImageUpload}
          setSelectedTemplate={setSelectedTemplate}
          selectedTemplate={selectedTemplate}
          setCanvasSize={setCanvasSize}
          updatePlatformColors={updatePlatformColors}
          canvasSize={canvasSize}
          setDesign={setDesign}
        />

        <DownloadBtn handleDownload={handleDownload} />
      </div>

      {/* --- CANVAS AREA --- */}
      <div className="flex-1 bg-[#f0f0f5] relative flex flex-col overflow-hidden">
        {/* Toolbar */}
        <Toolbar
          zoom={zoom}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          setZoom={setZoom}
          resetView={resetView}
        />

        {/* Viewport */}
        <div
          ref={viewportRef}
          className="flex-1 relative flex items-center justify-center p-10 bg-[#f0f0f5] overflow-hidden"
          onWheel={handleWheel}
          onMouseDown={startPan}
          onMouseMove={doPan}
          onMouseUp={stopPan}
          onMouseLeave={stopPan}
          style={{ cursor: isPanning ? 'grabbing' : 'grab' }}
        >
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center center',
              pointerEvents: 'none',
            }}
            className="shadow-[0_18px_60px_rgba(15,23,42,0.28)] bg-card"
          >
            <div
              style={{
                width: canvasWidth,
                height: canvasHeight,
                pointerEvents: 'auto',
              }}
              ref={canvasRef}
              className="overflow-hidden relative bg-white"
            >
              {selectedTemplate === 'corporate' && (
                <CorporateTemplate data={design} />
              )}
              {selectedTemplate === 'viral' && (
                <ViralPopTemplate data={design} />
              )}
              {selectedTemplate === 'influencer' && (
                <InfluencerTemplate data={design} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
