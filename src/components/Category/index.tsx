import React from 'react';

type ICategoryProps = {
  name: string;
};
const index: React.FC<ICategoryProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default index;
