import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/getting-started">
              Read Documentation
            </Link>
            {/* <Link
              className="button button--secondary button--lg"
              to="https://wordpress.org/plugins/creativesliderblock/">
              Download Now
            </Link> */}
          </div>
      </div>
    </section>
  );
}
