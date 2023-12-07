import React from 'react';
import {
  Typography,
  CardMedia,
  createTheme,
  Container,
  Box
} from '@mui/material';
import { ThemeProvider } from '@mui/styles';


interface MovieProps {
  movie: {
    Title: string;
    Genre: string;
    Poster: string;
    Year: string;
  } | null;
}

const MovieDisplay: React.FC<MovieProps> = ({ movie }) => {
  // const classes = useStyles();
  const theme = createTheme();

  if (!movie) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
      <Box sx={{ 
        mt: 4,
        border: 5,
        borderColor: 'brown',
        }}
      >
        <Typography variant="h5">{movie.Title}</Typography>
        <Typography variant="h6">{movie.Genre}</Typography>
        <CardMedia
          component="img"
          alt={movie.Title}
          height="400"
          image={movie.Poster}
        />
        <Typography variant="h6">{movie.Year}</Typography>
      </Box>
    </Container>
    </ThemeProvider>
  );
};

export default MovieDisplay;