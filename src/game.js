import { useDispatch, useSelector } from 'react-redux';
import { GameLayout } from './game-layout';
import { STATUS, PLAYER } from './constants';

function Game() {
	const dispatch = useDispatch();
	const { status, currentPlayer, field } = useSelector((state) => state);

	const handleRestartClick = () => {
		dispatch({ type: 'RESTART_GAME' });
	};

	const handleCellClick = (cellIndex) => {
		dispatch({ type: 'MAKE_MOVE', payload: { cellIndex } });
	};

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			handleCellClick={handleCellClick}
			field={field}
			handleRestartClick={handleRestartClick}
		/>
	);
}

export default Game;
