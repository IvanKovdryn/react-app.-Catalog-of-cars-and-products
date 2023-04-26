import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/home/Home";
import { CarPage } from "./screens/Cars/carPage";
import Products from "./screens/Products/Products";
import { Navigation } from "./screens/Navigation/Navigation";
import { ProductPage } from "./screens/Products/ProductPage";

export function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<CarPage />} path="/cars/:id" />
        <Route element={<ProductPage />} path="/product/:id" />
        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
