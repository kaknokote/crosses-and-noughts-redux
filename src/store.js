import { createStore } from 'redux';

const initialState = {
	status: 0,
	currentPlayer: 0,
	field: Array(9).fill(2),
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RESTART_GAME':
			return initialState;

		case 'MAKE_MOVE': {
			const { cellIndex } = action.payload;
			const { field, currentPlayer } = state;

			if (field[cellIndex] !== 2 || state.status !== 0) return state;

			const newField = [...field];
			newField[cellIndex] = currentPlayer;

			const winner = checkWin(newField, currentPlayer);
			const isDraw = !winner && !newField.includes(2);

			return {
				...state,
				field: newField,
				status: winner ? 1 : isDraw ? 2 : 0,
				currentPlayer: winner || isDraw ? currentPlayer : 1 - currentPlayer,
			};
		}

		default:
			return state;
	}
};

const checkWin = (field, player) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((index) => field[index] === player),
	);
};

export const store = createStore(gameReducer);
