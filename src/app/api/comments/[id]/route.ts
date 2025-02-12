import { comments } from "../data";

type Context = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params: { id } }: Context) {
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment)
    return Response.json(
      { message: "Comment not found", error: "404 Not Found" },
      { status: 404 }
    );

  return Response.json(comment, { status: 200 });
}

export async function PATCH(request: Request, { params: { id } }: Context) {
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment)
    return Response.json(
      { message: "Comment not found", error: "404 Not Found" },
      { status: 404 }
    );

  const { updatedComment } = await request.json();
  comment.comment = updatedComment;

  return new Response(JSON.stringify(comment), {
    status: 200,
  });
}
