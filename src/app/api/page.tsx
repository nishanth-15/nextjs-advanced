export default function Page() {
  return (
    <>
      <p>{`This page will not be rendered`}</p>
      <p>{`if page.tsx and route.ts is at the same level then route.ts will be rendered. Better to move route.ts to a sub folder or a new folder altogether named as for ex: api/`}</p>
    </>
  );
}
