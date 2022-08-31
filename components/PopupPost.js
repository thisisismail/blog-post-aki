import React from "react";
import { useRouter } from "next/router";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { GoComment } from "react-icons/go";

export default function PopupPost(props) {
  const router = useRouter();

  const {
    postTitle,
    postBody,
    closeButton,
    postUser,
    postEmail,
    postComments,
    postUserId,
  } = props;

  const commentsComponent = postComments?.map((comment) => {
    return (
      <div key={comment.email} className="mt-4">
        <div
          // onClick={() => router.push(`/users/${comment.id}`)}
          className="cursor-pointer hover:text-grey-800 hover:duration-500"
        >
          <h1 className="font-bold ">{comment.name}</h1>
          <h1 className="border-0 line-clamp-1 text-xs ">{comment.email}</h1>
        </div>
        <h1 className="text-md">{comment.body}</h1>
      </div>
    );
  });

  return (
    <div className="z-50 border-0 bg-grey-700 bg-opacity-80 backdrop-blur-sm h-full w-screen px-0 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <Card
        style={{ maxWidth: 800 }}
        className="p-2 rounded-xl fixed top-1/2 -translate-y-1/2 mx-2 lg:mx-auto border-0 border-black"
      >
        <div className="border-b-2 border-grey-200 w-full rounded-t-xl px-6 py-4">
          {postUser && (
            <div
              onClick={() => router.push(`/users/${postUserId}`)}
              className="cursor-pointer hover:text-grey-800 hover:duration-500"
            >
              <h1 className="border-0 font-bold text-sm">{postUser}</h1>
              <h1 className="border-0 line-clamp-1 text-xs">{postEmail}</h1>
            </div>
          )}
          {!postUser && (
            <>
              <h1 className="border-0 font-bold text-sm text-grey-400">
                Unknown
              </h1>
              <h1 className="border-0 line-clamp-1 text-xs text-grey-400">
                Unknown
              </h1>
            </>
          )}
        </div>
        <div className="border-0 border-red-200 absolute right-2 top-2 h-16">
          {closeButton}
        </div>
        <CardBody className="gap-3 flex flex-col border-0 h-80 sm:h-full overflow-scroll">
          <h1 className="font-bold text-lg sm:text-2xl">{postTitle}</h1>
          <h6 className="sm:text-lg">{postBody}</h6>
        </CardBody>
        <CardFooter divider className="flex flex-col h-18">
          <div className="border-0 self-end flex items-center">
            <div className="font-semibold">Comments</div>
            <GoComment size={24} className="ml-3 w-full text-black -mb-2" />
          </div>
          <div className="overflow-y-auto h-40 md:h-min">{commentsComponent}</div>
        </CardFooter>
      </Card>
    </div>
  );
}
