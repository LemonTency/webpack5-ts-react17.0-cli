import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { gameIdState} from 'web/recoil/atoms/gameAtoms';

const Square = () => {
	const gameState = useRecoilValue(gameIdState)
	const [gameId, setGameId] = useRecoilState(gameIdState);
		return(
			<button onClick={() => setGameId('有了')}>
			{gameId}
		</button>
		)
}

const RenderGame = () =>{
	return (
		<Square />
	)
}


export default RenderGame
