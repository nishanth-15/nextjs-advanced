import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Child 3 page</h1>
      <div className="flex flex-col gap-2">
        <Link href={"/intercepting-routes/child-2"}>Go to child 2</Link>
        <Link href={"/about"}>Go to about</Link>
        <Link href={"/intercepting-routes"}>Back to parent</Link>
      </div>
    </>
  );
}
