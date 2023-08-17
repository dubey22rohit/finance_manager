import { UserAuthForm } from "@/components/user-auth-form/user-auth-form";
import { Metadata } from "next";
import { BiRupee } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "login",
  description: "login to your account",
};

export default function LoginPage() {
  return (
    <div className={`w-screen h-screen flex items-center justify-center`}>
      <UserAuthForm />
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li>
            <MdAttachMoney className="h-full w-full" />
          </li>
          <li>
            <RiMoneyPoundCircleLine className="h-full w-full" />
          </li>
          <li>
            <BiRupee className="h-full w-full" />
          </li>
          <li>
            <RiMoneyPoundCircleLine className="h-full w-full" />
          </li>
          <li>
            <BiRupee className="h-full w-full" />
          </li>
          <li>
            <MdAttachMoney className="h-full w-full" />
          </li>
          <li>
            <MdAttachMoney className="h-full w-full" />
          </li>
          <li>
            <RiMoneyPoundCircleLine className="h-full w-full" />
          </li>
          <li>
            <BiRupee className="h-full w-full" />
          </li>
          <li>
            <BiRupee className="h-full w-full" />
          </li>
        </ul>
      </div>
    </div>
  );
}
