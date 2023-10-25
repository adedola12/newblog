

import React from 'react';
import Pagination from '../pagination/Pagination';

import Card from '../card/Card';

const CardList = () => {
  
  return (
    <div className="flex-[5] my-[50px]">
      <h1 className="font-[600] mb-[50px] text-[20px]">
        Recent Posts
      </h1>

      <div>
       <Card />
       <Card />
       <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
