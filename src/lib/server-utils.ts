import "server-only";

export function serverSideFunction() {
  console.log(
    "use multiple libraries, use env variables, interact with a database, process confidential information"
  );
  return "server result";
}
