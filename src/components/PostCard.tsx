import { useState } from "react";
import { Link } from "react-router-dom";

type PostProps = {
  post: any;
};

function PostCard({ post }: PostProps) {
  const [likes, setLikes] = useState(post.likes);

  const existingSavedPosts = JSON.parse(
    localStorage.getItem("savedPosts") || "[]",
  );

  const alreadySaved = existingSavedPosts.some(
    (item: any) => item.id === post.id,
  );

  const [saved, setSaved] = useState(alreadySaved);

  const likePost = () => {
    setLikes(likes + 1);
  };

  const savePost = () => {
    let savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");

    if (saved) {
      savedPosts = savedPosts.filter((item: any) => item.id !== post.id);

      setSaved(false);
    } else {
      savedPosts.push(post);

      setSaved(true);
    }

    localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
  };

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        backgroundColor: "white",
        boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
      }}
    >
      <h3>👤 {post.username}</h3>

      <img
        src={post.productImage}
        alt={post.caption}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "contain",
          borderRadius: "10px",
        }}
      />

      <h3>{post.caption}</h3>

      <p>
        <b>Category:</b> {post.category}
      </p>

      <p>❤️ {likes} Likes</p>

      <p>💬 {post.comments} Comments</p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={likePost}
          style={{
            padding: "8px",
            cursor: "pointer",
          }}
        >
          Like
        </button>

        <button
          onClick={savePost}
          style={{
            padding: "8px",
            cursor: "pointer",
          }}
        >
          {saved ? "Saved" : "Save"}
        </button>

        <Link to={`/post/${post.id}`}>
          <button
            style={{
              padding: "8px",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
