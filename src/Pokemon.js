import React, { useState } from 'react';
import { Typography, Link } from '@material-ui/core';
import { toFirstCharUppercase } from './constants';
import mockData from './mockData';

const Pokemon = (props) => {
	const pokemonId = props.match.params.id;
	const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);

	const generatePokemonJSX = () => {
		const { name, id, species, height, weight, types, sprites } = pokemon;
		const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
		const { front_default } = sprites;

		return (
			<>
				<Typography variant="h1">
					{`${id}.`} {toFirstCharUppercase(name)}
					<img src={front_default} />
				</Typography>
				<img style={{ width: '300px', height: '300px' }} src={fullImageUrl} />
				<Typography variant="h3">Pokemon Info</Typography>
				<Typography>
					{'Species: '}
					<Link href={species.url}>{species.name}</Link>
				</Typography>
				<Typography>Height: {height}</Typography>
				<Typography>Weight: {weight}</Typography>
				<Typography variant="h6">Types: </Typography>
				{types.map((type) => {
					const { name } = type.type;
					return <Typography key={name}>{`${name}`}</Typography>;
				})}
			</>
		);
	};

	return <>{generatePokemonJSX()}</>;
};

export default Pokemon;
