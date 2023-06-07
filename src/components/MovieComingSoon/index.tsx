import React from 'react';
import { MovieType } from '../../models/movie.type';
import { Grid, Typography, Rating } from '@mui/material';

const MovieComingSoon: React.FC<MovieType> = ({
  image,
  name,
  year,
  className,
}) => {
  return (
    <Grid
      container
      spacing={2}
      className={`bg-[rgb(56,53,53)] !ml-0 !mt-0n !w-auto hover:cursor-pointer !mt-[1px] ${className}`}
    >
      <Grid md={3}>
        <img src={image[0]} alt="" className="border-2 w-full h-full" />
      </Grid>
      <Grid md={8} className="mt-[10px] pl-[20px]">
        <Typography className="text-white text-left  hover:text-[#da966e] cursor-pointer">
          {name}
        </Typography>
        <Typography className="text-white text-left hover:text-[#da966e]">
          {year}
        </Typography>
        <div className="text-left">
          <Rating name="simple-controlled" className="color-white" />
        </div>
      </Grid>
    </Grid>
  );
};

export default MovieComingSoon;
