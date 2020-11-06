import React from 'react';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path="/" render={(props) => <Pokedex {...props} />} />
				<Route exact path="/:id" render={(props) => <Pokemon {...props} />} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
