"use client";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

{
  /* Error thrown in global layout.tsx file will be caught by this global-error.tsx file */
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center gap-8`}
      >
        {error.message}
        <button onClick={reset}>Reset Error</button>
      </body>
    </html>
  );
}
