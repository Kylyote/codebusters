import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import binary2 from "/images/binary2.gif"

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${binary2})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '100%',
      width: '100%',
      marginLeft:"15px"
     }} className="container">
      {/* <CategoryMenu /> */}
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
