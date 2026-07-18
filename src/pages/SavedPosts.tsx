import { useEffect, useState } from "react";

function SavedPosts() {
  const [savedPosts, setSavedPosts] = useState<any[]>([]);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("savedPosts") || "[]");

    setSavedPosts(posts);
  }, []);

  return (
    <div>
      <h1>Saved Posts</h1>

      {savedPosts.length === 0 ? (
        <p>No saved posts</p>
      ) : (
        savedPosts.map((post) => (
          <div key={post.id}>
            <img src={post.productImage} width="200" />

            <h3>{post.caption}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedPosts;
