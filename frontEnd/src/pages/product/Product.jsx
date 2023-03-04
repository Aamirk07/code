import { useState } from "react";
import { useParams } from "react-router-dom";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hook/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selected, setSelcted] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data);

  return (
    <div className="product">
      {loading ? (
        ""
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelcted("img")}
              />
              {data?.attributes?.img2.data?.attributes.url && (
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelcted("img2")}
                />
              )}
            </div>
            <div className="mainImage">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selected].data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h2>{data?.attributes?.title}</h2>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={(e) => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              {quantity}
              <button onClick={(e) => setQuantity(quantity + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img:
                      process.env.REACT_APP_UPLOAD_URL +
                      data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon />
              ADD TO CART
            </button>
            <div className="items">
              <div className="item">
                <FavoriteBorderIcon />
                ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon />
                ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>
                Product Type:{" "}
                {data?.attributes?.sub_categories?.data[0]?.attributes?.title}
              </span>
              <span>
                Tag:{" "}
                {data?.attributes?.sub_categories?.data[0]?.attributes?.title},{" "}
                {data?.attributes?.categories?.data[0]?.attributes?.title}, Top
              </span>
            </div>
            ADD TO CART
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
