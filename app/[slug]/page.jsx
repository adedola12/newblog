import Menu from '@/components/Menu/Menu';
import CommentCard from '@/components/comments/CommentCard';
import Comments from '@/components/comments/Comments';
import Image from 'next/image';
import React from 'react';

const SinglePage = () => {
  return (
    <div className="">

      <div className="flex items-center gap-[50px]">

        <div className="flex-1">
          <h1 className="text-[64px] mb-[50px] max-[1536px]:text-[54px] max-[1280px]:text-[48px] max-[768px]:text-[36px]">
            Elit nostrud duis id nulla sunt ut deserunt sit eiusmod in.
          </h1>

          <div className="flex gap-[15px]">

            <div className="h-[50px] w-[50px] relative max-[180px]:hidden">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="rounded-[50%] object-cover"
              />
            </div>

            <div className="flex flex-col gap-[5px] text-gray-400 font-[500]">
              <span>Author</span>
              <span>Date</span>
            </div>
          </div>
        </div>

        <div className="flex-1 h-[350px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover rounded-[10px]" />
        </div>
      </div>

      <div className="flex gap-[50px]">

        <div className="flex-[5] mt-[60px]">
          <div className='max-[768px]:text-[16px]'>
            <p className="text-[20px] font-[300] mb-[20px]">
              Veniam fugiat deserunt tempor duis culpa ut. Culpa culpa laborum nisi id tempor id quis nisi nisi cupidatat quis cillum. Anim dolor consequat fugiat proident qui et culpa. Anim velit nulla cillum mollit eu officia duis cupidatat sit adipisicing mollit sunt mollit. Mollit aliqua incididunt laborum nisi. Elit cupidatat anim commodo in quis velit eu culpa sunt pariatur nostrud do cillum. Nostrud ullamco deserunt dolore occaecat duis sint adipisicing.
            </p>
            <h2>
              Elit ipsum enim proident pariatur.
            </h2>
            <p className="text-[20px] font-[300] mb-[20px]">
              Veniam fugiat deserunt tempor duis culpa ut. Culpa culpa laborum nisi id tempor id quis nisi nisi cupidatat quis cillum. Anim dolor consequat fugiat proident qui et culpa. Anim velit nulla cillum mollit eu officia duis cupidatat sit adipisicing mollit sunt mollit. Mollit aliqua incididunt laborum nisi. Elit cupidatat anim commodo in quis velit eu culpa sunt pariatur nostrud do cillum. Nostrud ullamco deserunt dolore occaecat duis sint adipisicing.
            </p>
            <p className="text-[20px] font-[300] mb-[20px]">
              Veniam fugiat deserunt tempor duis culpa ut. Culpa culpa laborum nisi id tempor id quis nisi nisi cupidatat quis cillum. Anim dolor consequat fugiat proident qui et culpa. Anim velit nulla cillum mollit eu officia duis cupidatat sit adipisicing mollit sunt mollit. Mollit aliqua incididunt laborum nisi. Elit cupidatat anim commodo in quis velit eu culpa sunt pariatur nostrud do cillum. Nostrud ullamco deserunt dolore occaecat duis sint adipisicing.
            </p>
            <div> 
                <Comments />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>

          </div>
        </div>
        <Menu />
      </div>

    </div>
  );
};

export default SinglePage;
