import Image from 'next/image';
import Link from 'next/link';

const Card = ({key, item}) => {
  return (
    <div className="flex mb-[50px] items-center gap-[50px]" key={key}>

      {item.img && (<div className="flex-1 h-[350px] relative max-[1024px]:hidden">

        <Image src={item.Image} alt="" fill className="object-cover" />
      </div>)}

      <div className="flex-1 flex flex-col gap-[10px]">

        <div className="gap-[10px]">
          <span className={`'text-gray-400' pr-[5px]`}>
            {item.createdAt.substring (0, 10)}
          </span>
          <span className={`text-red-400 font-[500]`}>
            {item.catSlug}
          </span>
        </div>

        <div className="py-[10px]">

          <Link href={`/posts/${item.slug}`} >
            <h1 className={`text-[30px] font-[600]`}>
              {item.title}
            </h1>
          </Link>

          <p
            className={`text-[18px] font-[300] ${theme === 'black' ? 'text-gray-600' : 'text-gray-300'}`}
          >
            {item.desc.substring(0,80)}
          </p>

          <Link
            href={`/posts/${item.slug}`}          
            className="border-b-[1px] border-red-400 w-max p-[2px]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
