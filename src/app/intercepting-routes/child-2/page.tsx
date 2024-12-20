import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Child 2 page</h1>
      <div className="flex flex-col gap-2">
        <Link href={"/intercepting-routes/child-3"}>Go to child 3</Link>
        <Link href={"/intercepting-routes"}>Back to parent</Link>
      </div>
    </>
  );
}
