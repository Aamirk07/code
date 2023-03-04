import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secImg"
          />
        </div>
        <h3>{item?.attributes.title}</h3>
        <div className="prices">
          <h4>${item.oldPrice || item?.attributes.price + 20}</h4>
          <h4>${item?.attributes.price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
