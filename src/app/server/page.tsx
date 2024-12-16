import ImageSlider from "@/components/imageSlider";
// import { clientSideFunction } from "@/lib/client-utils";
import { serverSideFunction } from "@/lib/server-utils";

export default async function Page() {
  const result = serverSideFunction();

  // Below code will throw an error, as client side function cannot be called in the server component
  // const result = clientSideFunction();
  return (
    <>
      <h1>Server pages</h1>
      <p>{result}</p>
      {/* 
        call the client component that displays the react-slick slider as react-slick only works in a client component and implicitly doesn't use "use client" directive in it
      */}
      <ImageSlider />
    </>
  );
}
