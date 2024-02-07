import { useState } from "react";
import styles from "./Homepage.module.css";
import axios from "axios";

export default function Homepage(props) {
  const { updateResult, updateAddress } = props;
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.get("http://localhost:8000/address", {
      params: { address: searchInput },
    });
    updateResult(response.data.result);
    updateAddress(searchInput);
    setSearchInput("");
  }
  return (
    <div className={styles.advancedSearch}>
      <h1>Search for ETH(Ξ) address to track activity</h1>
      <form>
        <input
          type="text"
          name="address"
          placeholder="Enter ETH(Ξ) address"
          onChange={changeHandler}
        />
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
