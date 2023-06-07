import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { MovieType } from '../../models/movie.type';
import { Box, Typography } from '@mui/material';

const Movie: React.FC<MovieType> = ({ name, id, image, episode }) => {
  return (
    <div
      key={id}
      className="relative w-[188px] h-[250px] group cursor-pointer overflow-hidden "
    >
      <img
        src={image[0]}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer group-hover:scale-125 transition-transform duration-300"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pt-[5px]">
        <Typography className="text-left bg-[#A3765D] p-[2px] w-[100px] rounded-r-lg">
          Episode: {episode}
        </Typography>
        <Typography className="text-white p-[5px] bg-[rgba(0,0,0,0.7)]">
          {name}
        </Typography>
      </div>
      <div className="">
        <PlayCircleIcon
          className="absolute top-[50%] left-[50%]  translate-y-[-50%] translate-x-[-50%] w-[50px] !hidden group-hover:!block scale-75 transition-transform duration-[500]"
          sx={{ fontSize: 80 }}
        />
      </div>
    </div>
  );
};

export default Movie;
