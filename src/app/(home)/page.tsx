import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const src =
  "https://images.unsplash.com/photo-1732788325422-39d53c7943a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default async function Home() {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <main>
      <div>
        <Image
          src={src}
          height={2961}
          width={1974}
          alt="Mountain"
          className="w-[200px] h-[300px] object-cover"
          placeholder="blur"
          blurDataURL={base64}
          sizes="200px"
        />
      </div>
    </main>
  );
}
