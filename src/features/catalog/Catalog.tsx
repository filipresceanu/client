import { Fragment, useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: Math.random(),
      name: "Product" + (Math.random() + 1),
      price: Math.floor(Math.random() * 1000),
      brand: "some brand",
      description: "some description",
      type: "food",
      quantityInStock: Math.floor(Math.random() * 10),
      pictureUrl: "http://picsum.photos/200",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
}
