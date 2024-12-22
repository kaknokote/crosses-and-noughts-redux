import styles from './informaion.module.css';

export const InformationLayout = ({ information }) => {
	return <div className={styles.information}>{information}</div>;
};
