// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/Navbar';

function App() {
  const productList = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 99994,
      name: "Samsung Max Pro",
      quantity: 0,
    }
  ]
  return (
    <>
    <Navbar/>

    <ProductList productList={productList}/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
