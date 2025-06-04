"use client";

import React from "react";
import UkModulusChecking from "uk-modulus-checking";

interface IValidatorProps {
  readonly accountNumber: string;
  readonly sortCode: string;
}

export default function Validator({
  accountNumber,
  sortCode,
}: IValidatorProps) {
  const isValid = new UkModulusChecking({ accountNumber, sortCode }).isValid();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Validation Results</h2>
      <div className="space-y-2">
        <p>
          <strong>Account Number:</strong> {accountNumber}
        </p>
        <p>
          <strong>Sort Code:</strong> {sortCode}
        </p>
        <p>{isValid ? "Valid" : "Invalid"}</p>
      </div>
    </div>
  );
}
