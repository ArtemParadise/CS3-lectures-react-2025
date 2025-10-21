import styles from './ingredients-list.module.css';
import commonStyles from '../styles.module.css';

export const IngredientsList = ({ items }) => {
  return (
    <div>
      <h3 className={commonStyles.heading}>Інгредієнти:</h3>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item} className={styles.listItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
}