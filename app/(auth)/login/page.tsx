import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "login",
  description: "login to your account",
};

export default function LoginPage() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-bgaccent1 to-bgaccent2">
      <h1>Finance manager login</h1>
    </div>
  );
}
