import Products from "@/components/products";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <h1>Streaming rendering technique</h1>
      <Suspense fallback={<p>fetching products ...</p>}>
        <Products />
      </Suspense>
      <Suspense fallback={<p>fetching reviews ...</p>}>
        <Reviews />
      </Suspense>
    </main>
  );
}
