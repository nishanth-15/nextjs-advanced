import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Child page</h1>
      <Link href={"/intercepting-routes"}>Back to parent</Link>
    </>
  );
}
