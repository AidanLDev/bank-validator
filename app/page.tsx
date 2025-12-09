import Footer from "./components/footer";
import Form from "./components/form";

import { grey } from "@mui/material/colors";
import { blue, red } from "@mui/material/colors";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1
          className={`text-3xl sm:text-4xl font-bold `}
          style={{
            color: grey[500],
          }}
        >
          Gray
        </h1>
        <h2
          style={{
            color: red[500],
          }}
        >
          Red
        </h2>
        <h3
          style={{
            color: blue[500],
          }}
        >
          Blue
        </h3>
        <Form />
      </main>
      <Footer />
    </div>
  );
}
