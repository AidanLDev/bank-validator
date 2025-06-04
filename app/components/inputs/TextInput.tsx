import React from "react";

interface ITextInputProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly label: string;
}

export default function TextInput({ value, onChange, label }: ITextInputProps) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label
        htmlFor={`${label}-input`}
        className="text-sm font-semibold text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={`${label}-input`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm bg-white text-gray-900"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}
