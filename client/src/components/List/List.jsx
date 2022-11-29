import "./List.scss";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";

const List = ({ catId, maxPrice, sort, subCats }) => {
  const { data, isLoading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort || "asc"}`
  );

  console.log(data);

  return (
    <div className="list">
      {isLoading
        ? "Loading"
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
