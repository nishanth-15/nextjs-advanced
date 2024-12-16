export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const params = await searchParams; // Ensure searchParams are awaited
  const { hello } = params ?? {};

  return (
    <main>
      <p>Search params - {hello ?? "'hello' searchParam doesn't exists"}</p>
    </main>
  );
}
