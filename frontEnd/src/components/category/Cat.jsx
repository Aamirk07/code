import { Link } from "react-router-dom";
import "./cat.scss";

const Cat = () => {
  return (
    <div className="cat">
      <div className="col">
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/stylish-european-brunette-woman-red-coat-black-hat-posing-white-wall_273443-4654.jpg?w=2000"
            alt=""
          />
          <button>
            <Link className="link" to="/product/2">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://img.faballey.com/images/trendsfeb22/waist-cinchers.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/product/2">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://i.pinimg.com/originals/99/25/b5/9925b587a0d7b0d6497adaf3bbb92755.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/product/2">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-lg">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://media.glamourmagazine.co.uk/photos/6138a448ba092ab636a112b1/4:3/w_1920,h_1440,c_limit/gettyimages-1299181790_sq.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/product/2">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <button>
                <Link className="link" to="/product/2">
                  Women
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://i.guim.co.uk/img/media/82d2a4829877e5f2cd70ac34a641dabd0ddf29c5/12_4655_1477_886/master/1477.jpg?width=700&quality=85&auto=format&fit=max&s=0946ef8b463d922b5724f18fecc30976"
            alt=""
          />
          <button>
            <Link className="link" to="/product/2">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cat;
