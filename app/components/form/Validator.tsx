import React from "react";

interface IValidatorProps {
  readonly status: "pending" | "valid" | "invalid";
}

export default function Validator({ status }: IValidatorProps) {
  const validText = (
    <>
      <span className="text-2xl">✅</span>
      <span>Valid</span>
    </>
  );
  const invalidText = (
    <>
      <span className="text-2xl">❌</span>
      <span>Invalid</span>
    </>
  );
  const pendingText = (
    <>
      <span className="text-2xl">🟦</span>
      <span>Awaiting input</span>
    </>
  );

  let style;
  if (status === "valid") {
    style = {
      background: "rgba(40, 167, 69, 0.15)",
      color: "#7CFCB6",
      border: "1px solid #28a745",
    };
  } else if (status === "invalid") {
    style = {
      background: "rgba(220, 53, 69, 0.15)",
      color: "#FF7B7B",
      border: "1px solid #dc3545",
    };
  } else {
    style = {
      background: "rgba(0, 123, 255, 0.15)",
      color: "#7BB7FF",
      border: "1px solid #007bff",
    };
  }

  return (
    <div
      className="w-full"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        fontWeight: 500,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        marginTop: "3rem",
        ...style,
      }}
    >
      {status === "valid" && validText}
      {status === "invalid" && invalidText}
      {status === "pending" && pendingText}
    </div>
  );
}
