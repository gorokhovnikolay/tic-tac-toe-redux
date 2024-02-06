import { legacy_createStore } from 'redux';
import { STATUS, PLAYER } from './constants';
import { checkWin, checkEmptyCell } from './utils';
import { createEmptyField } from './utils';

const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: createEmptyField(),
};

function counterReducer(state = initialState, action) {
	switch (action.type) {
		case 'handleRestart':
			state = initialState;
			return state;

		case 'handleCellClick':
			let { status, field, currentPlayer } = state;
			if (
				status === STATUS.WIN ||
				status === STATUS.DRAW ||
				field[action.payload] !== PLAYER.NOBODY
			) {
				return state;
			}
			const newField = [...field];

			newField[action.payload] = currentPlayer;

			state = { ...state, field: newField };

			if (checkWin(newField, currentPlayer)) {
				state = { ...state, status: STATUS.WIN };
			} else if (checkEmptyCell(newField)) {
				state = {
					...state,
					currentPlayer:
						currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
				};
			} else {
				state = { ...state, status: STATUS.DRAW };
			}
			return state;
		default:
			return state;
	}
}

export const store = legacy_createStore(counterReducer);
