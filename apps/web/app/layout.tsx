'use client'
import { TamaguiProvider } from "./TamaguiProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <TamaguiProvider>
      <body>{children}</body>
    </TamaguiProvider>
    </html>
  );
}
