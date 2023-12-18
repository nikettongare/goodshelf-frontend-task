import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({
  product,
}: {
  product: { [key: string]: any };
}) {
  return (
    <Link href={`/products/${product.title}`}>
      <div className="flex flex-col w-full">
        <div className="relative w-full h-24 md:h-32 lg:h-52">
          <Image
            className="rounded-lg"
            src={product.thumbnail}
            alt={product.title}
            fill={true}
          />
        </div>

        <div className="mt-2 lg:mt-3 h-[64px] md:h-[88px] lg:h-[104px]">
          <h1 className="text-xs md:text-base lg:text-xl font-semibold line-clamp-2">
            {product.title}
          </h1>

          <p className="mt-1 md:mt-2 text-[10px] md:text-sm lg:text-base text-gray-700 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-1 md:mt-2 lg: flex justify-between items-center ">
          <p className="text-xs md:text-base lg:text-lg">
            <span className="font-bold">₹{product.price}</span> /{' '}
            {product.quantity}
          </p>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 md:h-8 md:w-8 fill-red-500 hover:fill-red-600 cursor-pointer"
            >
              <path d="M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
