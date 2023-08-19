import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPost = orderedPosts.map((el) => {
    return (
      <article key={el.id}>
        <h3>{el.title}</h3>
        <p> {el.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={el.userId} />
          <TimeAgo timestamp={el.date} />
        </p>
        <ReactionButton post={el} />
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
