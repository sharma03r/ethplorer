import styles from "./Homepage.module.css";

export default function Homepage() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.advancedSearch}>
      <h1>Search for ETH(Ξ) address</h1>
      <form>
        <input type="text" name="" id="" placeholder="Enter ETH(Ξ) address" />
        <button onClick={(e) => handleSubmit(e)}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/external-nawicon-outline-color-nawicon/30/external-search-finance-nawicon-outline-color-nawicon.png"
            alt="external-search-finance-nawicon-outline-color-nawicon"
          />
        </button>
      </form>
    </div>
  );
}
