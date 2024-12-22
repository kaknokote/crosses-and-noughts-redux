import { FieldLayout } from './field-layout';

export const Field = ({ handleCellClick, field }) => {
	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
