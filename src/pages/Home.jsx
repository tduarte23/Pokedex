import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'

function Home() {
    const [pokemons,setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(()=>{
       getPokemons();
    },[])

    const nextPage = () =>{

    }
    const getPokemons = () => {
        var endpoints = [];
        for (var i =1;i < 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint)=>axios.get(endpoint))).then((res)=>setPokemons(res));

    };

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if (name === ""){
            getPokemons();
        }
        for (var i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons);
    };
  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter}/>
      <Container maxWidth="false">
        <Grid container spacing={3}>
            {pokemons.map((pokemon, key)=>(
                <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Home
