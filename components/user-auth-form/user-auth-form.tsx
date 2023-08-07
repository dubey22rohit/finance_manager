"use client";

import styles from "./user-auth-form.module.css";
import { userAuthSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { PrimaryContainer } from "../ui/primary-container/primary-container";

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
    <div>
      <form className="col-span-2 self-center mx-10 my-10 h-full" onSubmit={handleSubmit(onSubmit)}>
        <PrimaryContainer />
      </form>
    </div>
  );
}
