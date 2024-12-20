{
  /* This is the intercepted page that is rendered when we navigate from "/intercepting-route/child-3" to "/intercepting-route/child-2" route */
}

export default function Page() {
  return (
    <>
      <h1>
        This is the intercepted (.) child 2 page when we navigate from child 3
        page
      </h1>
      <p>
        Refresh the page to access normal <strong>child 2</strong> page
      </p>
    </>
  );
}
