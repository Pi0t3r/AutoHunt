import styles from "./navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <span>
          <Link href="/register">Login</Link> |{" "}
          <Link href="/register">Sign in</Link>
        </span>
      </div>
      <div>      
          <Link href="/"><h1>Auto<span>hunt</span></h1></Link>
      </div>
    </nav>
  );
}
