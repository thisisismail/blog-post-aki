import React from "react";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { GoComment } from "react-icons/go";

export default function PostCard(props) {
  const { index, title, body, userName, userEmail, comments } = props;
  return (
    <Card
      className="border-0 rounded-xl w-full flex flex-col justify-center hover:bg-grey-200 hover:duration-500"
      key={index}
    >
      <div className="border-b-2 border-grey-200 w-full rounded-t-xl px-6 py-4">
        {userName && (
          <>
            <h1 className="border-0 font-bold text-sm">{userName}</h1>
            <h1 className="border-0 line-clamp-1 text-xs">{userEmail}</h1>
          </>
        )}
        {!userName && (
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
      <CardBody
        className="gap-3 flex flex-col justify-center relative border-0"
        style={{ height: 180 }}
      >
        <h1 className="font-bold text-2xl line-clamp-2 overflow-hidden">
          {title}
        </h1>
        <h6 className="overflow-hidden line-clamp-2 text-md">{body}</h6>
      </CardBody>
      <CardFooter divider className="flex justify-end items-center h-18">
        <div className="border-0 flex items-center">
          <div className="font-semibold">{comments}</div>
          <GoComment size={24} className="ml-3 w-full text-black -mb-2" />
        </div>
      </CardFooter>
    </Card>
  );
}
