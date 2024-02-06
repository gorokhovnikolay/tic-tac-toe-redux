import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { store } from '../../store';
import { useState } from 'react';

const { getState, subscribe } = store;

export const Information = () => {
	const [flag, setFlag] = useState(false);
	const { status, currentPlayer } = getState();
	subscribe(() => setFlag(!flag));

	const playerAction = PLAYER_ACTION[status];
	console.log('playerAction', playerAction);

	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <div>{information}</div>;
};
