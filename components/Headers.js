import Link from "next/link";
const Header = () => {
    return (<nav style={styles.nav}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/about" style={styles.link}>About</Link>
    </nav>);
};
const styles = {
    nav: {
        display: "flex", gap: "20px", padding: "10px", backgroundColor: "#333",
    }, link: {
        color: "#fff", textDecoration: "none", fontSize: "18px",
    },
};
export default Header;
