import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allPokemon } from '../store/actions/pokemonAction'

const Pagination = () => {
	const pokemon = useSelector((state) => state.pokemonReducer)
	const dispatch = useDispatch()

	return (
		<div className='pagination'>
			<button
				type='button'
				className='pagination__btn'
				disabled={!pokemon.allPokemon.previous}
				onClick={() => {
					if (pokemon.allPokemon.previous) {
						dispatch(allPokemon(pokemon.offset - 20, pokemon.limit))
					}
				}}
			>
				Previour
			</button>
			<button
				type='button'
				disabled={!pokemon.allPokemon.next}
				className='pagination__btn'
				onClick={() => {
					if (pokemon.allPokemon.next) {
						dispatch(allPokemon(pokemon.offset + 20, pokemon.limit))
					}
				}}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination
