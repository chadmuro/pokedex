import React from 'react';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import { Route, Switch, HashRouter } from 'react-router-dom';

const App = () => {
	return (
		<HashRouter basename="/">
			<Switch>
				<Route exact path="/" render={(props) => <Pokedex {...props} />} />
				<Route exact path="/:id" render={(props) => <Pokemon {...props} />} />
			</Switch>
		</HashRouter>
	);
};

export default App;
