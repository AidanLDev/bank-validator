"use client";

import React, { useState } from "react";
import TextInput from "../inputs/TextInput";
import Validator from "./Validator";
import UkModulusChecking from "uk-modulus-checking";

/*
Test account number: 16267564
test sort code: 110834
*/

export default function Form() {
  const [accountNumber, setAccountNumber] = useState("");
  const [sortCode, setSortCode] = useState("");

  let status: "pending" | "valid" | "invalid";
  if (sortCode.length < 6 || accountNumber.length < 6) {
    status = "pending";
  } else if (new UkModulusChecking({ accountNumber, sortCode }).isValid()) {
    status = "valid";
  } else {
    status = "invalid";
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-80 flex flex-col items-center">
        <TextInput
          value={sortCode}
          onChange={(value) => setSortCode(value)}
          label="Sort Code"
          isValid={status === "valid"}
        />
        <TextInput
          value={accountNumber}
          onChange={(value) => setAccountNumber(value)}
          label="Account Number"
          isValid={status === "valid"}
        />
        <Validator status={status} />
      </div>
    </div>
  );
}
