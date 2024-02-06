import { PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';
import { store } from '../../store';
import { useState } from 'react';

const { dispatch, subscribe, getState } = store;

export const Field = () => {
	const [flag, setFlag] = useState(false);
	subscribe(() => setFlag(!flag));
	const { field } = getState();

	return (
		<div className={styles.field}>
			{field.map((cellPlayer, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => dispatch({ type: 'handleCellClick', payload: index })}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</div>
	);
};
