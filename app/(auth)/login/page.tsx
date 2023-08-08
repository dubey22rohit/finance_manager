import { UserAuthForm } from "@/components/user-auth-form/user-auth-form";
import { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "login",
  description: "login to your account",
};

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradientBlueBlack">
      <Image src={"/images/world-bg.png"} className={styles.bgImage} width={1920} height={1080} alt="background" />
      <UserAuthForm />
    </div>
  );
}
