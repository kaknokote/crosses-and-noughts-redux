import { WIN_PATTERNS } from '../constants';

export const checkWin = (field, currentPlayer) => {
	return WIN_PATTERNS.some((combination) =>
		combination.every((index) => field[index] === currentPlayer),
	);
};
