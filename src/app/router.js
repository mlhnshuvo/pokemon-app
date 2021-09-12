import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DetailsPokemon from '../pages/DetailsPokemon'
import Home from '../pages/Home'

const router = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/details/:id'>
					<DetailsPokemon />
				</Route>
			</Switch>
		</div>
	</Router>
)

export default router
