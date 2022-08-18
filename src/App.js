// import Home from "./pages/home/Home";
// import Single from "./pages/home/single/Single";
// import Write from "./pages/write/Write";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import "./App.css";
// import Login from "./components/Login";
// import AddProduct from "./components/products/AddProduct";
// import ListProducts from "./components/products/ListProducts";
// import ProductDisplay from "./components/products/ProductDisplay";
// import Products from "./components/products/Products";
// import Search from "./components/products/Search";

function App() {
  return (
    <Router>
      <TopBar/>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<topBar />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="/post/:postId" element={<Single/>} /> */}
        {/* <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}


export default App;
