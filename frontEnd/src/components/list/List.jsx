import "./list.scss";
import Card from "../card/Card";
import useFetch from "../../hook/useFetch";

const List = ({ subCats, maxPrice, catId, sort }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filter][price][$lte]=${maxPrice}`
  );

  return (
    <div className="list">
      {error
        ? "somthing went wrong"
        : loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
