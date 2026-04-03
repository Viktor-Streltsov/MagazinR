import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "../../style/StaticPage.module.css";

const Help = () => {
  return (
    <div className={styles.wrap}>
      <section className={styles.inner}>
        <h1 className={styles.title}>Help</h1>

        <div className={styles.block}>
          <h3>Orders &amp; delivery</h3>
          <p className={styles.p}>
            Add items to the cart and complete checkout. Delivery times and fees
            depend on your region; you will see details before payment.
          </p>
        </div>

        <div className={styles.block}>
          <h3>Returns</h3>
          <p className={styles.p}>
            Unused items in original packaging can be returned within 14 days.
            Contact support with your order number to start a return.
          </p>
        </div>

        <div className={styles.block}>
          <h3>Contact</h3>
          <p className={styles.p}>
            Questions? Write to{" "}
            <a href="mailto:support@example.com">support@example.com</a>
            {" "}(replace with your real address).
          </p>
        </div>

        <NavLink to={ROUTES.HOME} className={styles.back}>
          ← Back to shop
        </NavLink>
      </section>
    </div>
  );
};

export default Help;
