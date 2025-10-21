import styles from './card.module.css';

export const Card = ({ children, title }) => {
  return (
    <div className={styles.recipeCard}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}