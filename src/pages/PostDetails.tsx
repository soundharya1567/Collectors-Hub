import { useParams } from "react-router-dom";
import posts from "../data/posts";

function PostDetails() {
  const { id } = useParams();

  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>{post.username}</h1>

      <img
        src={post.productImage}
        alt={post.caption}
        width="400"
        style={{
          borderRadius: "10px",
        }}
      />

      <h2>{post.caption}</h2>

      <p>
        <b>Category:</b> {post.category}
      </p>

      <p>❤️ {post.likes} Likes</p>

      <p>💬 {post.comments} Comments</p>
    </div>
  );
}

export default PostDetails;
