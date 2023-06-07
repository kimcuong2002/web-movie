import DefaultLayout from '../layouts/DefaultLayout';
import { dataFilms } from '../utils/FilmsItems';
import { getPosts } from '../api/user.api';
import { PostType } from '../models/post.type';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie/index';
import ContentLayout from '../layouts/ContentLayout';
import { Box, Grid, Typography } from '@mui/material';

const Home = () => {
  const [posts, setPosts] = useState<PostType[] | []>([]);

  const navigate = useNavigate();

  const getAllPost = async () => {
    try {
      const data = await getPosts();
      setPosts(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <DefaultLayout>
      <Box className="bg-[#1a1a1a]">
        {/* {posts.map((item: PostType) => (
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(`/movie-detail/${item.id}`);
            }}
          >
            <Category name={item.title} key={item.id} />
          </div>
        ))} */}
        <ContentLayout>
          <Box>
            <Typography className="uppercase text-[#da966e] ">
              new movies update
            </Typography>
            <hr className="my-[20px] " />
            <Grid container spacing={4} className="!w-auto">
              {dataFilms &&
                dataFilms.map((item, index) => {
                  return (
                    <Grid item xs={3} key={index}>
                      <Movie
                        name={item.name}
                        image={[item.image]}
                        episode={item.episode}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </ContentLayout>
      </Box>
    </DefaultLayout>
  );
};

export default Home;
