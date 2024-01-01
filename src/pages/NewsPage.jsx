import { useParams } from "react-router-dom";
// import Categories from "../components/Categories";
import Categories from "../components/news/Categories";
// import NewsList from "../components/NewsList";
import NewsList from "../components/news/NewsList";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}
export default NewsPage;