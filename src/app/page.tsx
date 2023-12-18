import { PRODUCTS_ENDPOINT } from './config';
import NoProducts from './components/NoProducts';
import ErrorPage from './components/ErrorPage';
import ProductSwiper from './components/ProductSwiper';

function normalizeText(text: string) {
  const words = text.split(/(?=[A-Z])/);

  const readableText = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return readableText;
}

export default async function Home() {
  let response: any = null;
  try {
    response = await fetch(PRODUCTS_ENDPOINT, {
      next: { revalidate: 10 },
    });
  } catch (error) {
    return <ErrorPage error="Failed to reached to server!" />;
  }

  if (!response.ok) {
    return <ErrorPage error="Error fetching products, try again later!" />;
  }

  response = await response.json();

  if (!response.success) {
    return <ErrorPage error={response.message} />;
  }

  const products: { [key: string]: any[] } = response.res;

  if (!products || !Object.keys(products).length) {
    return <NoProducts />;
  }

  return (
    <main className="">
      {Object.entries(products).map(([key, value], i) => (
        <section key={i} className="mt-2 md:mt-4 lg:mt-6">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{normalizeText(key)}</h1>
          <ProductSwiper products={value} />
        </section>
      ))}
    </main>
  );
}
