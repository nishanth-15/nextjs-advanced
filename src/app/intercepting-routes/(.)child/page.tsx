{
  /* This is the intercepted page that is rendered when nextjs intercepts "/intercepting-route/child" route */
}

export default function Page() {
  return (
    <>
      <h1>
        This is the intercepted (.) <strong>child 1</strong> page
      </h1>
      <p>
        Refresh the page to access normal <strong>child 1</strong> page
      </p>
    </>
  );
}
