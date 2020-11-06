import React, { useEffect, useState } from 'react';
import {
	Typography,
	Button,
	ButtonGroup,
	CircularProgress,
	Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toFirstCharUppercase } from './constants';
import axios from 'axios';

const useStyles = makeStyles(() => ({
	pokemonContainer: {
		textAlign: 'center'
	}
}))

const Pokemon = (props) => {
	const { history } = props;
	const pokemonId = props.match.params.id;
	const [pokemon, setPokemon] = useState(undefined);
	const classes = useStyles();

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
			.then(function (response) {
				const { data } = response;
				setPokemon(data);
			})
			.catch(function (error) {
				setPokemon(false);
			});
	}, [pokemonId]);

	const generatePokemonJSX = () => {
		const { name, id, height, weight, types, sprites } = pokemon;
		const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
		const { front_default } = sprites;

		return (
			<Container className={classes.pokemonContainer}>
				<Typography variant="h1">
					{`${id}.`} {toFirstCharUppercase(name)}
					<img src={front_default} alt={name} />
				</Typography>
				<img
					style={{ width: '300px', height: '300px' }}
					src={fullImageUrl}
					alt={name}
				/>
				<Typography variant="h3">Pokemon Info</Typography>
				<Typography>Height: {height * 10} cm</Typography>
				<Typography>Weight: {weight / 10} kg</Typography>
				<Typography variant="h6">Types: </Typography>
				{types.map((type) => {
					const { name } = type.type;
					return <Typography key={name}>{`${name}`}</Typography>;
				})}
				<ButtonGroup>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => history.push(`/${+pokemonId - 1}`)}
					>
						Previous
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => history.push(`/${+pokemonId + 1}`)}
					>
						Next
					</Button>
				</ButtonGroup>
				<br />
			</Container>
		);
	};

	return (
		<>
			{pokemon !== undefined && (
				<Button
					variant="contained"
					color="primary"
					onClick={() => history.push('/')}
					fullWidth
				>
					{' '}
					Back to Pokedex
				</Button>
			)}
			{pokemon === undefined && <CircularProgress />}
			{pokemon !== undefined && pokemon && generatePokemonJSX()}
			{pokemon === false && <Typography>Pokemon not found</Typography>}
		</>
	);
};

export default Pokemon;
