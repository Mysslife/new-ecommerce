import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, isLoading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis at
          nulla expedita rerum iure quasi illo provident animi, tenetur minus,
          quod dolor aliquam! Omnis consequatur excepturi perferendis nihil
          itaque laboriosam.
        </p>
      </div>

      <div className="bottom">
        {error
          ? "Something went wrong"
          : isLoading
          ? "Loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
