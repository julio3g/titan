import styles from './styles.module.scss';

interface TitleProps {
  title: string;
  description?: string;
}

export function Title({ title, description }: TitleProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
