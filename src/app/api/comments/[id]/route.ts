import { comments } from "../data";

export async function GET(
  _: Request,
  { params: { id } }: { params: { id: string } }
) {
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment)
    return Response.json(
      { message: "Comment not found", error: "404 Not Found" },
      { status: 404 }
    );

  return Response.json(comment, { status: 200 });
}

