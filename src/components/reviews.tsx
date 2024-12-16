export default async function Reviews() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <h2>Reviews</h2>;
}
