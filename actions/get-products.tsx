import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  isFeatured?: boolean;
  isNew?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isNew: query.isNew,
      isFeatured: query.isFeatured,
    },
  });
  console.log(url);

  const res = await fetch(url);
  return res.json();
};

export default getProducts;
