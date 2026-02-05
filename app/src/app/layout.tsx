// src/app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css"
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ padding: 24, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
