import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit ab debitis neque quia nam temporibus in vitae quod quae totam, ducimus architecto quos ullam cum aliquam alias aspernatur culpa?
          </span>
        </div>
        <div className="item">
          <h2>Contacts</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio ut explicabo ullam iure cumque fuga ipsam consequuntur corporis excepturi? Quasi iure in ea?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomLeft">
          <span className="logo">SrxStore</span>
          <span className="copyright">© copyright 2023.All Rights Reserved</span>
        </div>
        <div className="bottomRight">
          <img src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
