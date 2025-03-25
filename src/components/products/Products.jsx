import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../slices/productSlice";
import ProductsList from "./ProductsList";

const Products = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector((state) => state.productSlice);
  console.log("dada", data, error, isLoading);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      welcome
      <ProductsList data={data} />
    </div>
  );
};

export default Products;
