import products from '@/data/products';
import Details from '@/components/products/Details';
import { useRouter } from 'next/router';

const ProductDeails = ({ params }) => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === +params.id);

  return (
    <div>
      <h5>{product.price}</h5>
      <Details products={product} />
    </div>
  );
};

export default ProductDeails;

export async function getStaticProps({ params }) {
  const product = products.find((product) => product.id === +params.id);

  return { props: { products: product } };
}

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}
