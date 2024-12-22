import styles from './game.module.css';
import { Information } from './components';
import { Field } from './components';

export const GameLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	handleRestartClick,
}) => {
	return (
		<div className={styles.game}>
			<Information status={status} currentPlayer={currentPlayer} />
			<Field field={field} handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestartClick}>
				Начать сначала
			</button>
		</div>
	);
};
