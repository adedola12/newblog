
import Image from 'next/image';
import Link from 'next/link';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  })

  if(!res.ok) {
    throw new Error("failed")
  }

  return res.json()
}

const CategoryList = async () => {
  // Styles
  const categoryStyle =
    'flex items-center gap-[10px] capitalize w-[15%] h-[80px] justify-center rounded-[10px] max-[1280px]:w-[20%] max-[1024px]:w-[25%] max-[768px]:w-[45%] max-[640px]:w-[100%]';
  const categoryImageStyle = 'rounded-[50%]';

const data = await getData()

  return (
    <div>
      <h1 className="my-[50px]">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-[20px]">
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.name}`}
            className={ ` flex items-center gap-[10px] capitalize w-[15%] h-[80px] justify-center rounded-[10px] max-[1280px]:w-[20%] max-[1024px]:w-[25%] max-[768px]:w-[45%] max-[640px]:w-[100%] bg-sky-300}`}
            key={item._id}
          >
            {item.image && <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className={categoryImageStyle}
            />}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
