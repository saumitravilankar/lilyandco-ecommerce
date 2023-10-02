"use client";

import { useState } from "react";

import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import ProductList from "./ui/products-list";

interface FeaturedProductsProps {
  data: Product[];
  newData: Product[];
  saleData: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  data,
  newData,
  saleData,
}) => {
  const [currentData, setCurrentData] = useState<Product[]>(data);

  return (
    <>
      <div className="flex w-full justify-center gap-20  items-center mt-10 font-semibold text-primaryTheme">
        <Button
          variant={"ghost"}
          size={"lg"}
          className="text-xl"
          onClick={() => setCurrentData(data)}
        >
          All
        </Button>
        <Button
          variant={"ghost"}
          size={"lg"}
          className="text-xl"
          onClick={() => setCurrentData(newData)}
        >
          New Arrivals
        </Button>
        <Button
          variant={"ghost"}
          size={"lg"}
          className="text-xl"
          onClick={() => setCurrentData(saleData)}
        >
          On Sale
        </Button>
      </div>
      <div>
        <ProductList items={currentData} />
      </div>
    </>
  );
};

export default FeaturedProducts;
