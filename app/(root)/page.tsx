import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  // const latestProducts = sampleData.products;

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={6} />
    </>
  );
};

export default HomePage;
