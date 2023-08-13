import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPost = posts.map((el) => {
    return (
      <article key={el.id}>
        <h3>{el.title}</h3>
        <p> {el.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <div>
      <h2>Posts</h2>
      {renderedPost}
    </div>
  );
};

export default PostList;
