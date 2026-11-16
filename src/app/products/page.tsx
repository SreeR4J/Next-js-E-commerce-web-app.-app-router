
import React from "react";
import { ProductServices } from "../services/product-services";
import ProductClient from "./productClient";

export default async function Page() {

  const products = await ProductServices.getProducts();

  return (
    <ProductClient products={products} />
  );
}
