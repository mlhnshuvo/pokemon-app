import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allPokemon, sorting } from '../store/actions/pokemonAction'

const LimitSort = () => {
	const [sort, setSort] = useState()
	const pokemon = useSelector((state) => state.pokemonReducer)
	const dispatch = useDispatch()
	useEffect(() => {
		setSort(localStorage.getItem('sort'))
		dispatch(sorting(sort))
	}, [dispatch, sort])

	return (
		<div className='limitandsort'>
			<div className='limitandsort__perpage'>
				<label htmlFor='perpage' className='limitandsort__perpage'>
					Sort by
				</label>
				<select
					name='sort'
					value={sort}
					className='limitandsort__select'
					onChange={(e) => {
						setSort(e.target.value)
						localStorage.setItem('sort', e.target.value)
					}}
				>
					<option className='limitandsort__option'>Select an option</option>
					<option value='name' className='limitandsort__option'>
						Name
					</option>
					<option value='weight' className='limitandsort__option'>
						Weight
					</option>
					<option value='height' className='limitandsort__option'>
						Height
					</option>
				</select>
			</div>

			<div className='limitandsort__perpage'>
				<label htmlFor='perpage' className='limitandsort__perpage'>
					Per page
				</label>
				<select
					name='sort'
					className='limitandsort__select'
					onChange={(e) => dispatch(allPokemon(pokemon.offset, e.target.value))}
				>
					<option className='limitandsort__option'>Select limit</option>
					<option className='limitandsort__option'>10</option>
					<option className='limitandsort__option'>20</option>
					<option className='limitandsort__option'>30</option>
					<option className='limitandsort__option'>40</option>
					<option className='limitandsort__option'>50</option>
					<option className='limitandsort__option'>60</option>
				</select>
			</div>
		</div>
	)
}

export default LimitSort
