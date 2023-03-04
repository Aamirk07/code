import List from "../../components/list/List";
import "./products.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hook/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loadin, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handelChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="leftP">
        <div className="filterItem">
          <h3>Product Categories</h3>
          {data?.map((item) => (
            <div className="inputItem" key={item?.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handelChange}
              />
              <label htmlFor={item.id}>{item?.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h3>Flter by price</h3>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by</h3>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">price low to high</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="dsc"
              name="price"
              onChange={(e) => setSort("dsc")}
            />
            <label htmlFor="dsc">price high to low</label>
          </div>
        </div>
      </div>
      <div className="rightP">
        <img
          className="catImg"
          src="https://www.hogent.be/sites/hogent/assets/Image/banner3.jpg"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
