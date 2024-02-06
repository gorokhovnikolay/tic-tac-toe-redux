import { Field, Information } from './components';
import styles from './game.module.css';
import { store } from './store';

const { dispatch } = store;

export const Game = () => (
	<div className={styles.game}>
		<Information />
		<Field />
		<button
			className={styles.restartButton}
			onClick={() => dispatch({ type: 'handleRestart' })}
		>
			Начать заново
		</button>
	</div>
);
