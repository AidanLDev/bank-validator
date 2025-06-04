"use client";

import React, { useState } from "react";
import TextInput from "../inputs/TextInput";
import Validator from "./Validator";

export default function Form() {
  const [accountNumber, setAccountNumber] = useState("");
  const [sortCode, setSortCode] = useState("");
  return (
    <div>
      <TextInput
        value={accountNumber}
        onChange={(value) => setAccountNumber(value)}
        label="Account Number"
      />
      <TextInput
        value={sortCode}
        onChange={(value) => setSortCode(value)}
        label="Sort Code"
      />
      <Validator accountNumber={accountNumber} sortCode={sortCode} />
    </div>
  );
}
