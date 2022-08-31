import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { GrClose } from "react-icons/gr";
import PostCard from "../components/PostCard.js";
import PopupPost from "../components/PopupPost.js";

export default function PostsList(props) {
  const { postsdata } = props;

  const [popup, setPopup] = useState();

  const postsList = postsdata?.map((post, index) => {
    // close popup handler
    const closePupup = () => {
      console.log("close post pupup");
      setPopup();
    };

    // open popup handler
    const openPopup = () => {
      console.log("open post popup");
      setPopup(
        <PopupPost
          postComments={post.comments}
          postUser={post.username}
          postEmail={post.useremail}
          postUserId={post.postid}
          postTitle={post.title}
          postBody={post.body}
          closeButton={
            <Button
              onClick={closePupup}
              className="h-full bg-transparent shadow-none drop-shadow-none hover:drop-shadow-none hover:shadow-none"
            >
              <GrClose size={24} />
            </Button>
          }
        />
      );
    };

    return (
      <div
        key={index}
        style={{ width: 400 }}
        onClick={() => openPopup()}
        className="cursor-pointer pb-2"
      >
        <PostCard
          userName={post.username}
          userEmail={post.useremail}
          title={post.title}
          body={post.body}
          comments={post.numComments}
          key={index}
        />
      </div>
    );
  });
  return (
    <div>
      <div>{popup}</div>
      <div className="pt-16 mx-auto border-0 w-min">{postsList}</div>
    </div>
  );
}
