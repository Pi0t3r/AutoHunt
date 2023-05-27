import { BsChevronDown } from "react-icons/bs";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import Offers from "@/components/modules/offer/Offers";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.div}>
      <div className={styles.shadow} />
      <Navbar />
      <header className={styles.header}>
        <div className={styles.info}>
          <p>
            Welcome to <span>autohunt</span>
          </p>
          <p>The best site to find your dream car</p>
        </div>
        <span className={styles.arrow}>
          <BsChevronDown />
        </span>
      </header>
      <main className={styles.main}>
        <section className={styles.offers}>
          <Offers />
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      <Footer />
    </div>
  );
}
