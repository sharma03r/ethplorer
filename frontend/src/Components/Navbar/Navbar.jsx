import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <a href="#" className={styles.logo}>
        <img
          width={40}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg"
          alt=""
        />
        <h2>&euro;thplorer</h2>
      </a>
    </nav>
  );
}
