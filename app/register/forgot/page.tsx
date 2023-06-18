/* eslint-disable react/no-unescaped-entities */
import styles from "./forgot.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
export default function Forgot() {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/register">
          <BsFillArrowLeftCircleFill />
        </Link>
        <span>Forgot password</span>
      </div>
      <div className={styles.information}>
        <p>Enter your email and we'll send you a link to reset your password.</p>
      </div>
      <div className={styles.form}>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" placeholder="example@email.com" />
        <input type="submit"  value="Reset password"/>
      </div>
    </div>
  );
}
