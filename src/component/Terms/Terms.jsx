import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "../../style/StaticPage.module.css";

const Terms = () => {
  return (
    <div className={styles.wrap}>
      <section className={styles.inner}>
        <h1 className={styles.title}>Terms &amp; conditions</h1>

        <div className={styles.block}>
          <h3>Use of the site</h3>
          <p className={styles.p}>
            By using this store you agree to these terms. The service is provided
            as-is; we may change features or prices with reasonable notice where
            required by law.
          </p>
        </div>

        <div className={styles.block}>
          <h3>Products &amp; pricing</h3>
          <p className={styles.p}>
            Descriptions and images are for illustration. We try to keep stock
            and prices accurate; if an error affects your order, we will contact
            you before charging or shipping.
          </p>
        </div>

        <div className={styles.block}>
          <h3>Privacy</h3>
          <p className={styles.p}>
            We process personal data needed to fulfill orders and improve the
            service. For a full policy, add a separate Privacy page and link it
            from the footer when you are ready.
          </p>
        </div>

        <div className={styles.block}>
          <h3>Disclaimer</h3>
          <p className={styles.p}>
            This text is a minimal placeholder for a demo shop — replace it with
            counsel-reviewed terms before production.
          </p>
        </div>

        <NavLink to={ROUTES.HOME} className={styles.back}>
          ← Back to shop
        </NavLink>
      </section>
    </div>
  );
};

export default Terms;
