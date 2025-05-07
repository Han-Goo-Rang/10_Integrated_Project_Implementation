// src/app/page.js
import "./globals.css";
import Dashboard from "@/components/dashboard";
import Login from "@/components/login";

export default function Home() {
  return (
    <main className="flex">
      <Login />
    </main>
  );
}
