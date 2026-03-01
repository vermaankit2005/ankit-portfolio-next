import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Verma | Senior Java Backend Engineer",
  description:
    "Senior Java Backend Engineer with 9+ years building scalable microservices and Android platforms across Automotive and Mobile domains.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
