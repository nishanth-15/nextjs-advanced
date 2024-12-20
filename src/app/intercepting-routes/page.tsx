import Link from "next/link";

{
  /* Intercepting routes conventions:
  (.) to match segments on the same level
  (..) to match segments on one level above
  (..)(..) to match segments two levels above
  (...) to match segments from to the root app directory
  */
}

export default function Page() {
  return (
    <>
      <h1>Parent page</h1>
      <div className="flex flex-col gap-2">
        <Link href={"/intercepting-routes/child"}>Go to child 1</Link>
        <Link href={"/intercepting-routes/child-2"}>Go to child 2</Link>
        <Link href={"/intercepting-routes/child-3"}>Go to child 3</Link>
      </div>
    </>
  );
}
