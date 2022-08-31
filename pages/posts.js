import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storePosts } from "../store/redux/action/index.js";
import { Button } from "@material-tailwind/react";
import { GrClose } from "react-icons/gr";
import Navbar from "../components/Navbar.js";
import PostCard from "../components/PostCard.js";
import PopUpPost from "../components/PopupPost.js";
import PostsList from "../components/PostsList.js";

export default function posts({ posts, users, comments }) {
  const dispatch = useDispatch();

  const oldPostsData = useSelector((state) => state.postsReducer);

  const postsList = posts?.map((post) => {
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
    // console.log(postComments);
    // console.log(numComments);
    // console.log("Hello");

    const postData = {
      postid: post.id,
      username: user.name,
      useremail: user.email,
      title: post.title,
      body: post.body,
      numcomments: numComments,
      comments: postComments,
    };

    dispatch(storePosts(oldPostsData.push(postData)));

    return null;
  });

  return (
    <div>
      {postsList ? postsList : null}
      <Navbar />
      {!oldPostsData ? null : <PostsList postsdata={oldPostsData} />}
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
