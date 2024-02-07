import styles from "./Detail.module.css";
import ethLogo from "../../images/eth-logo.png";

export default function Detail(props) {
  const { detail, address } = props;
  console.log(detail);
  return (
    <div className={styles.mainHolder}>
      <div className={styles.addressInfo}>
        <div className={styles.general}>
          <div>
            <img src={ethLogo} alt="eth logo" />
          </div>
          <div className={styles.txHashHolder}>
            <h2>Address</h2>
            <h1>{address}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
