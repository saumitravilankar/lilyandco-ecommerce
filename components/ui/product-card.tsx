import Image from "next/image";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <>
      <div className="aspect-square bg-gray-100 relative">
        <Image
          src={data.images[0].url}
          alt=""
          fill
          className="aspect-square object-cover"
        />
        {data.isNew && (
          <div className="w-20 h-8 bg-white absolute top-5 left-0 flex items-center justify-center shadow-xl">
            New
          </div>
        )}
      </div>
      <div className="mt-3">
        <p className="text-xl tracking-wide text-center w-full">{data.name}</p>
      </div>
      {data.newPrice != 0 ? (
        <div className="flex items-center justify-center gap-4 my-2">
          <div className="flex items-center justify-center font-semibold">
            <Currency value={data?.newPrice} />
          </div>
          <div className="line-through text-muted-foreground opacity-80 decoration-1">
            <Currency value={data.price} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center font-semibold my-2">
          <Currency value={data?.price} />
        </div>
      )}
    </>
  );
};

export default ProductCard;
