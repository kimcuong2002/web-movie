import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { MovieType } from '../../models/movie.type';

const MostProminentMovie: React.FC<MovieType> = ({
  name,
  views,
  image,
  className,
  indexMovie,
}) => {
  return (
    <Box className={`${className} bg-[#lalala] p-[20px] hover:cursor-pointer`}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box className="w-[35px] h-[35px] rounded-[100%] bg-[#da966e] text-white font-bold flex items-center justify-center">
            {indexMovie}
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography className="text-white hover:text-[#da966e]">
            {name}
          </Typography>
          <Typography className="text-white hover:text-[#da966e]">
            {views} views
          </Typography>
          <img src={image[0]} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MostProminentMovie;
