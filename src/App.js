import { Route, Routes } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
// import Single from "./pages/single/Single";
// import "./App.css";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
// import AddProduct from "./components/products/AddProduct";
// import ListProducts from "./components/products/ListProducts";
// import ProductDisplay from "./components/products/ProductDisplay";
// import Products from "./components/products/Products";
// import Search from "./components/products/Search";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";

function App() {
  const user = false;
  return (
    <>
    <TopBar/>

    <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route path="/register" element={user ? <Home/> : <Register/>}/>
      <Route path="/login" element={user ? <Home/> : <Login />} />
      <Route path="/write" element={user ? <Write/> : <Register />} />
      <Route path="/settings" element={user ? <Settings/> : <Register />} />
      <Route path="/post/:postId" element={<Single/>}/>


    </Routes>

    </>
  );
}


export default App;


/* 

<Routes>
        <Route path="/" element={<topBar />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Single/>} /> 
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} /> 
         </Route> 
      </Routes>

*/