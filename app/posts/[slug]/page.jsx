import Menu from '@/components/Menu/Menu';
import CommentCard from '@/components/comments/CommentCard';
import Comments from '@/components/comments/Comments';
import Image from 'next/image';
import React from 'react';

const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${slug}}`,
    {
      cache:"no-cache"
    }
  );

  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}

const SinglePage = async ({params}) => {

  const { slug } =  params

  const data = await getData(slug)

  return (
    <div className="">

      <div className="flex items-center gap-[50px]">

        <div className="flex-1">
          <h1 className="text-[64px] mb-[50px] max-[1536px]:text-[54px] max-[1280px]:text-[48px] max-[768px]:text-[36px]">
            {data?.title}
          </h1>

          <div className="flex gap-[15px]">

            <div className="h-[50px] w-[50px] relative max-[180px]:hidden">
              {data?.user?.image && <Image
                src={data.user.image}
                alt=""
                fill
                className="rounded-[50%] object-cover"
              />}
            </div>

            <div className="flex flex-col gap-[5px] text-gray-400 font-[500]">
              <span>{data?.user.name}</span>
              <span>Date</span>
            </div>
          </div>
        </div>

        {data?.img && (<div className="flex-1 h-[350px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover rounded-[10px]" />
        </div>)}
      </div>

      <div className="flex gap-[50px]">

        <div className="flex-[5] mt-[60px]">
          <div className='max-[768px]:text-[16px]' dangerouslySetInnerHTML={{__html: data?.desc}}/>
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

   
  );
};

export default SinglePage;
