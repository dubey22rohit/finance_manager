"use client";

import { Container } from "@/components/ui/container/container";
import { userAuthSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    <Container
      variant="default"
      className={`${styles.container} h-2/3 w-1/2 flex flex-col justify-center items-center bg-gradientBlueBlack`}
    >
      <h1 className="text-4xl">SIGN IN</h1>
      <form className="flex flex-col items-center justify-around h-1/2 w-[30rem]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full">
          <Input className="h-16" placeholder="EMAIL" />
        </div>
        <div className="flex flex-col w-full">
          <Input className="h-16" placeholder="PASSWORD" />
        </div>
        <Button buttonText="Sign In" />
      </form>
    </Container>
  );
}
