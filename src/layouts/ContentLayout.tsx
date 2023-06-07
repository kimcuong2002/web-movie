import MovieComingSoon from '../components/MovieComingSoon/index';
import MostProminentMovie from '../components/MostProminent/index';
import demonslayer from '../assets/images/demonslayer.jpeg';
import React, { ReactElement } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { mostprominent } from '../__mock/mostprominent';
import { moviescomingsoon } from '../__mock/moviescomingsoon';

type IContentLayout = {
  children: ReactElement;
};

const ContentLayout: React.FC<IContentLayout> = ({ children }) => {
  return (
    <Box className="w-[60%] pb-[20px]">
      <Grid container spacing={2}>
        <Grid item xs={9}>
          {children}
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography className="uppercase text-[#da966e] ">
              movie coming soon
            </Typography>
            <hr className="my-[20px] pb-[18px]" />
            <Box className="odd:bg-red-500">
              {moviescomingsoon &&
                moviescomingsoon.map((item, i) => {
                  return (
                    <MovieComingSoon
                      name={item.name}
                      image={item.image}
                      year={item.year}
                      className="odd:bg-[#1a1a1a]"
                    />
                  );
                })}
            </Box>
          </Box>
          <Box className="my-[20px]">
            <Typography className="uppercase text-[#da966e] ">
              trending
            </Typography>
            <hr className="my-[20px] mb-[20px] " />
            <Box>
              <Button color="secondary">Day</Button>
              <Button color="secondary">Month</Button>
              <Button color="secondary">Year</Button>
            </Box>
            <Box>
              {mostprominent &&
                mostprominent.map((item, i) => {
                  return (
                    <MostProminentMovie
                      indexMovie={i + 1}
                      name={item.name}
                      views={item.views}
                      image={'item.image'}
                      className="odd:bg-[rgb(56,53,53)]"
                    />
                  );
                })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentLayout;
