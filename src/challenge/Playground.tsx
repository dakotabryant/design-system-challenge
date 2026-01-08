import { useState } from 'react';
import { Alert } from './Alert';
import styles from './Playground.module.css';

export function Playground() {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <div className={styles.playground}>
      {/* ─────────────────────────────────────────────────────────────────────
       * SECTION: Basic Variants
       * ───────────────────────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Variants</h2>
        <div className={styles.alertStack}>
          <Alert variant="info">
            This is an informational alert. It provides neutral information to the user.
          </Alert>

          <Alert variant="success">
            This is a success alert. It indicates a successful operation.
          </Alert>

          <Alert variant="warning">
            This is a warning alert. It draws attention to potential issues.
          </Alert>

          <Alert variant="error">
            This is an error alert. It indicates something went wrong.
          </Alert>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
       * SECTION: With Titles
       * ───────────────────────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>With Titles</h2>
        <div className={styles.alertStack}>
          <Alert variant="info" title="Did you know?">
            You can customize your notification preferences in the settings panel.
          </Alert>

          <Alert variant="success" title="Payment successful">
            Your payment of $99.00 has been processed. A confirmation email is on its way.
          </Alert>

          <Alert variant="warning" title="Storage almost full">
            You've used 90% of your storage quota. Consider upgrading your plan.
          </Alert>

          <Alert variant="error" title="Failed to save">
            We couldn't save your changes. Please check your connection and try again.
          </Alert>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
       * SECTION: Dismissible
       * ───────────────────────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Dismissible</h2>
        <div className={styles.alertStack}>
          {showDismissible ? (
            <Alert 
              variant="info" 
              title="Dismissible Alert"
              dismissible
              onDismiss={() => setShowDismissible(false)}
            >
              Click the X button to dismiss this alert. A button will appear to show it again.
            </Alert>
          ) : (
            <button
              onClick={() => setShowDismissible(true)}
              className={styles.resetButton}
            >
              Show Dismissed Alert
            </button>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
       * SECTION: Real-world Examples
       * ───────────────────────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Real-world Examples</h2>
        <div className={styles.alertStack}>
          <Alert variant="info" title="New feature available">
            We've added dark mode support! Enable it in your profile settings to try it out.
          </Alert>

          <Alert variant="warning" title="Scheduled maintenance">
            Our servers will be undergoing maintenance on Saturday, March 15th from 2:00 AM to 4:00 AM UTC. 
            You may experience brief interruptions during this time.
          </Alert>

          <Alert variant="error" title="Session expired">
            Your session has expired due to inactivity. Please log in again to continue.
          </Alert>
        </div>
      </section>
    </div>
  );
}

export default Playground;
