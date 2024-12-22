import { PLAYER } from '../constants';

export function checkEmptyCell(field) {
	return field.includes(PLAYER.NOBODY);
}
