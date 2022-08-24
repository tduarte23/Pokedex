import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';

export default function PokemonCard({name , image, types}) {
  const [tipo,setTipo] = useState([])
  const typeSelect = ()=>{
    types.map((type,idx) => {
      let color = ""
      switch(type.type.name){
        case 'normal':
            setTipo("#a6a877");
            break;
        case 'grass':
            setTipo("#77c850");
            break;
        case 'ground':
            setTipo("#dfbf68");
            break;
        case 'fighting':
            setTipo("#bf3028");
            break;
    }
    })
}
  return (
    <Card sx={{ maxWidth: 345 , fontFamily: 'Rubik Iso', backgroundColor: '#ffffff'}}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Pokemon Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex"}}>
      {types.map((type,idx) => { 
        let color = ""
        switch(type.type.name){
          case 'normal':
              color = "#a6a877";
              break;
          case 'grass':
              color = "#77c850";
              break;
          case 'ground':
              color = "#dfbf68";
              break;
          case 'fighting':
              color = "#bf3028";
              break;
          case 'rock':
              color = "#b8a137";
              break;
          case 'steel':
              color = "#b9b7cf";
              break;
          case 'fire':
              color = "#ee7f30";
              break;
          case 'electric':
              color = "#f7cf30";
              break;
          case 'flying':
              color = "#a98ff0";
              break;
          case 'psychic':
              color = "#f85687";
              break;
          case 'bug':
              color = "#a8b720";
              break;
          case 'dragon':
              color = "#6f38f6";
              break;
          case 'water':
              color = "#678fee";
              break;
          case 'ice':
              color = "#98d5d6";
              break;
          case 'poison':
              color = "#a03fa0";
              break;
          case 'dark':
              color = "#725847";
              break;
          case 'ghost':
              color = "#6e5896";
              break;
          case 'fairy':
              color = "#feaec7";
              break;
        }
          return (
            <Button style={{backgroundColor: color}} key={idx}>
              {type.type.name}
            </Button>
            )}
        )}
      </CardActions>   
    </Card>
  );
}
