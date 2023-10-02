"use client";

import { motion } from "framer-motion";

import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <>
      <div className="space-y-4">
        {items.length === 0 && <NoResults />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: [90, 0], opacity: [0, 1] }}
              transition={{ delay: index * 0.1, ease: "linear", duration: 0.4 }}
            >
              <ProductCard data={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
