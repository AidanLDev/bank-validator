import React from "react";
import { toast } from "sonner";

interface ITextInputProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly label: string;
  readonly isValid: boolean;
}

export default function TextInput({
  value,
  onChange,
  label,
  isValid,
}: ITextInputProps) {
  // Copy to clipboard handler
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <div className="flex flex-col gap-1 mb-4 w-full">
      <label
        htmlFor={`${label}-input`}
        className="text-lg font-semibold text-gray-200 mb-1 flex justify-center"
      >
        {label}
      </label>
      <div className="flex w-full gap-2">
        <input
          id={`${label}-input`}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border-2 transition duration-200 shadow-sm bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 ${
            isValid
              ? "border-green-500 focus:ring-green-400"
              : "border-gray-700 focus:ring-blue-500"
          } placeholder-gray-400`}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        <button
          type="button"
          onClick={handleCopy}
          className="px-3 py-2 rounded-lg bg-gray-800 text-gray-200 border border-gray-600 hover:bg-gray-700 transition"
          aria-label={`Copy ${label}`}
          title={`Copy ${label}`}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
