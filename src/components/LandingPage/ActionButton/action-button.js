import React from "react";
import styles from "./action-button.module.scss";

const ActionButton = () => {
  return (
    <div className={styles["button-container"]}>
      <a href="#contact" className={styles["button"]}>
     Feel Free To Contact Me!
      </a>
    </div>
  );
};

export default ActionButton;
