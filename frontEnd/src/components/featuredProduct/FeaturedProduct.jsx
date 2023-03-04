import Card from "../card/Card";
import "./featuredProduct.scss";
import useFetch from "../../hook/useFetch";

const FeaturedProduct = ({ types }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${types}`
  );

  return (
    <div className="featuredProduct">
      <div className="topContainer">
        <h2>{types} Products</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia iste
          accusantium deleniti facere illum quis ex, odio, molestiae, ducimus
          eos exercitationem perspiciatis. Vel deleniti ab doloremque explicabo
          corrupti labore est quia facilis non vitae impedit in neque, earum
          deserunt ex officia ut eius?
        </p>
      </div>
      <div className="bottomContainer">
        {error
          ? "Somthing went wrng!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
