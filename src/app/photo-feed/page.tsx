import Link from "next/link";
import wonders from "./data";
import Image from "next/image";

export default function Page() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              sizes="(min-width: 1540px) 372px, (min-width: 1280px) 308px, (min-width: 1040px) 244px, (min-width: 780px) 180px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
              className="w-full object-cover aspect-square"
              placeholder="blur"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
