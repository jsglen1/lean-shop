import Link from "next/link";
import { FaShop } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.brand}>
                        <FaShop size={28} />
                        <Link href="/" className={styles.brandName}>
                            LeanShop
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/cart">
                            <FiShoppingCart size={28} />
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;