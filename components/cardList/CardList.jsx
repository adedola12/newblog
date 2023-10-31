import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat  }) => {
  
  const {posts, count} = await getData({ page, cat });

  const POST_PER_PAGE = 2

  const hasPrev =POST_PER_PAGE * (page-1) >0
  const hasNext = POST_PER_PAGE * (page-1) * POST_PER_PAGE < count

  return (
    <div className="flex-[5] my-[50px]">
      <h1 className="font-[600] mb-[50px] text-[20px]">
        Recent Posts
      </h1>

      <div>
        <div className="flex mb-[50px] items-center gap-[50px]">
          {posts?.map((item) => (
            <Card item={item} key={item._id || item.id} />
          ))}
        </div>
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  );
};

export default CardList;
