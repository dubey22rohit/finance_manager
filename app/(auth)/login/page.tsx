import { Metadata } from "next";
import { UserAuthForm } from "@/components/user-auth-form/user-auth-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "login",
  description: "login to your account",
};

export default function LoginPage() {
  return (
    <div className="w-screen h-screen bg-primaryGradient flex items-center justify-center">
      <UserAuthForm />
    </div>
  );
}
