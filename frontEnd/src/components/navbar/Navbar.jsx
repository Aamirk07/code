import {
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="https://i.guim.co.uk/img/media/d78a425025aff2bb0c177fcd28980af565ffa044/0_204_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7ac65775924040fd0336fa6bbe88a9f6"
              alt=""
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              Accessories
            </Link>
          </div>
        </div>
        <div className="mid">
          <Link className="link" to="/">
            SRXSTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contacts
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon">
              <ShoppingCartOutlined onClick={(e) => setOpen(!open)} />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
