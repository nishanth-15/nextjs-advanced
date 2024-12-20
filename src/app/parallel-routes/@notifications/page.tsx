import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-evenly h-full w-full relative">
      <h2 className="text-center w-full">Default Notifications</h2>
      <Link
        href={"/parallel-routes/archived"}
        className="absolute bottom-0.5 right-0.5 text-blue-500 hover:underline"
      >
        Archived
      </Link>
    </div>
  );
}
