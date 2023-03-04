import Cat from "../../components/category/Cat";
import Contact from "../../components/contact/Contact";
import FeaturedProduct from "../../components/featuredProduct/FeaturedProduct";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProduct types="featured" />
      <Cat/>
      <FeaturedProduct types="trending" />
      <Contact/>
    </div>
  );
};

export default Home;
