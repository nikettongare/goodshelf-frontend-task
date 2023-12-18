import Image from 'next/image';

export default function Appbar() {
  return (
    <header className="flex items-center my-2">
      <Image
        src="https://goodshelf.app/assets/images/logo.png"
        alt="Goodshelf"
        height={100}
        width={200}
        className="h-10 w-[100px] md:h-16 md:w-[120px] lg:h-24 lg:w-[200px]"
      />
    </header>
  );
}
