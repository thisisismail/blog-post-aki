import React from "react";
import PostCard from "../components/PostCard";

export default function posts({ posts, users, comments }) {
  // if (!posts) {
  //   return null;
  // }

  const postsList = posts?.map((post, index) => {
    // finding coresponding user info
    const user = users?.find((user) => {
      return user.id === post.userId;
    });

    // finding coresponding comments info
    const postComments = comments?.filter((comment) => {
      return comment.postId === post.id;
    });

    // finding number of comments
    const numComments = postComments.length;

    console.log(user);
    console.log(postComments);
    console.log(numComments);

    return (
      <div
        key={index}
        style={{ width: 400 }}
        // onClick={() => openPopUp(item.title, item.body)}
        className="cursor-pointer pb-2"
      >
        <PostCard
          userName={user.name}
          userEmail={user.email}
          title={post.title}
          body={post.body}
          comments={numComments}
          key={index}
        />
      </div>
    );
  });
  return (
    <div>
      <div>Posts</div>
      {postsList}
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return {
    props: {
      posts,
      users,
      comments,
    },
  };
};
