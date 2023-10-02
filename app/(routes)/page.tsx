import Container from "@/components/ui/container";
import FeaturedProducts from "@/components/featured-products";
import getProducts from "@/actions/get-products";
import getProductsBySize from "@/actions/get-size";
import getProductsByColor from "@/actions/get-color";

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const newProducts = await getProducts({ isNew: true });
  let onSale = await getProducts({});

  onSale = onSale.filter((item) => item.newPrice != 0);
  console.log(onSale);

  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <FeaturedProducts
              data={products}
              newData={newProducts}
              saleData={onSale}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
