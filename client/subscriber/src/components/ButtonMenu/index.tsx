interface IProps {
  onClick: () => void;
  mobileMenu: boolean;
}
import styles from './styles.module.scss';

export function ButtonMenu({ onClick, mobileMenu }: IProps) {
  return (
    <button
      type="button"
      aria-label="Menu"
      className={`${styles.button} ${mobileMenu && styles.buttonActive}`}
      onClick={onClick}
    >
      <div />
    </button>
  );
}
