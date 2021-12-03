import styles from '../styles/loader.module.css'

export const SmallLoader = () => (
  <div className={styles.small__loader} />
)
export const LargeLoader = () => (
  <div className={styles.loader__ctn}>
    <div className={styles.large__loader} />
  </div>
)
export const LargeLoaderOverlay = () => (
  <div className={styles.loader__ctn__overlay}>
    <div className={styles.large__loader} />
  </div>
)
