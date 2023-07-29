'use client'
import { BsChevronDown } from "react-icons/bs";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import Offers from "@/components/modules/offer/Offers";
import styles from "./page.module.css";
import UserContext from "@/context/UserContext";
import { useState } from "react";
export default function Home() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}
