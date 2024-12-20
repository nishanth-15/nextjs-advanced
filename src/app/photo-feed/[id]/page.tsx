import Image from "next/image";
import wondersImages, { WonderImage } from "../data";
import { notFound } from "next/navigation";

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const photo: WonderImage | undefined = wondersImages.find(
    (photo) => photo.id === id
  );

  if (!photo) notFound();

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          height={512}
          width={512}
          className="w-full object-cover aspect-square"
          placeholder="blur"
          sizes="(min-width: 1540px) 768px, (min-width: 1280px) 640px, (min-width: 1040px) 512px, (min-width: 780px) 384px, (min-width: 680px) 320px, calc(47.22vw + 8px)"
        />

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
