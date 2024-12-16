import ImageSlider from "@/components/imageSlider";
import { serverSideFunction } from "@/lib/server-utils";

export default async function Page() {
  const result = serverSideFunction();

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
