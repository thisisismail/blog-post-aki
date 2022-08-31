import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storePosts } from "../store/redux/action/index.js";
import PostCard from "../components/PostCard.js";

export default function posts({ posts, users, comments }) {
  // if (!posts) {
  //   return null;
  // }

  const dispatch = useDispatch();

  const oldPostsData = useSelector((state) => state.postsReducer);

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

    // console.log(user);
    // console.log(postComments);
    // console.log(numComments);
    // console.log("Hello");

    const postData = {
      postid: post.id,
      username: user.name,
      useremail: user.email,
      title: post.title,
      body: post.body,
      comments: numComments,
    };

    dispatch(storePosts(oldPostsData.push(postData)));

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

  const handleClick = () => {
    console.log(oldPostsData);
    console.log("hello");
  };

  return (
    <div>
      <div>Posts</div>
      <button onClick={handleClick} className="border-2 border-black">
        Click Me
      </button>
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
