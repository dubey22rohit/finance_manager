"use client";

import { Container } from "@/components/ui/container/container";
import { userAuthSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { z } from "zod";
import { Button } from "../ui/button/button";
import { Input } from "../ui/input/input";
import styles from "./user-auth-form.module.css";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(userAuthSchema) });

  const onSubmit = () => {};

  return (
    <Container variant="default" className={`${styles.container} h-3/4 w-2/3 grid grid-flow-col grid-cols-2`}>
      <Image
        src={"/images/money-bg.webp"}
        height={1080}
        width={1920}
        priority
        className="col-span-1 w-full h-full bg-cover"
        alt="money bg"
        style={{ objectFit: "contain" }}
      />
      <div className="flex flex-col justify-center gap-y-16 items-start col-span-1 px-16 py-24">
        <h1 className="text-5xl font-bold self-start">login to your account</h1>
        <form className="flex flex-col items-center gap-y-10 w-[50rem]" onSubmit={handleSubmit(onSubmit)}>
          <Button className="flex flex-row justify-center items-center gap-x-4">
            <AiOutlineGoogle size={20} />
            login with google
          </Button>
          <h3 className={styles.divider}>or</h3>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Link href={"/"} className="text-3xl self-start text-bsgray500">
            forgot password?
          </Link>
          <Button>sign in</Button>
        </form>
      </div>
    </Container>
  );
}
