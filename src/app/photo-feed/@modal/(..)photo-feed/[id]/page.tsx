import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/data";
import Modal from "@/components/modal";
import { notFound } from "next/navigation";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);
  
  if (!photo) notFound();

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
        sizes="(min-width: 1540px) 768px, (min-width: 1280px) 640px, (min-width: 1040px) 512px, (min-width: 780px) 384px, (min-width: 680px) 320px, calc(47.22vw + 8px)"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
