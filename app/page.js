import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/categoryList";
import Featured from "@/components/featured/Featured";


export default function Home({ searchParams }) {
  
  const page = parseInt(searchParams.page) || 1

  return (
   <div>
    <Featured />
    <CategoryList />
    <div className="flex gap-[50]">
      <CardList page={page}/>
      <Menu />
    </div>
   </div>
  )
}
