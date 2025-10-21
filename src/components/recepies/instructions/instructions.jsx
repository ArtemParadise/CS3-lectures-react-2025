import styles from './instructions.module.css';
import commonStyles from '../styles.module.css';

export const Instructions = ({ steps }) => {
  return (
    <div>
      <h3 className={commonStyles.heading}>Інструкція:</h3>
      <p className={styles.instructions}>{steps}</p>
    </div>
  );
}