// src/app/page.tsx
import "./globals.css";
import Dashboard from "@/components/dashboard";

import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="flex">
      <Dashboard />
      
    </main>
  );
}
