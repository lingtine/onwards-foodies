"use client";
import styles from "./header-main.module.css";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          alt="logo_page"
          src={logoImg.src}
          priority
          width={100}
          height={100}
        />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li className={pathname.includes("/meals") && styles.active}>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li className={pathname === "/community" && styles.active}>
            <Link href={"/community"}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
