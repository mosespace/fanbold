'use client';

export default function ColorPicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-lg border border-gray-200">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-7 h-7 rounded cursor-pointer border border-gray-200 bg-white"
        />
        <span className="text-xs font-mono text-gray-700 flex-1">
          {value.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
