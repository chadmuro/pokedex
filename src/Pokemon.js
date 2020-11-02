import React from 'react';

const Pokemon = (props) => {
	const pokemonId = props.match.params.id;
    
    console.log(props);
	return <div>{`This is the pokemon page for pokemon id ${pokemonId}`}</div>;
};

export default Pokemon;
