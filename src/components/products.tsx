export default async function Products() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h2>Products</h2>;
}
