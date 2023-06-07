import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { useParams } from 'react-router-dom';
import { getPostDetail } from '../api/user.api';
import { PostType } from '../models/post.type';
import { Skeleton } from '@mui/material';

const MovieDetail = () => {
  const [postDetail, setPostDetail] = useState<PostType | null>(null);

  const param = useParams();
  const id = param?.id;

  const getDetailPost = async (id: string) => {
    try {
      const res = await getPostDetail(id);
      setPostDetail(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) {
      getDetailPost(id);
    }
  }, [id]);

  return (
    <DefaultLayout>
      <>
        {!postDetail && (
          <>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </>
        )}
        {postDetail && (
          <div>
            <p>{postDetail?.title}</p>
            <p>{postDetail?.userId}</p>
            <p>{postDetail?.body}</p>
          </div>
        )}
      </>
    </DefaultLayout>
  );
};

export default MovieDetail;
