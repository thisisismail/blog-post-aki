import Link from "next/link";
import { Input } from "@material-tailwind/react";

export default function HeaderSection() {
  return (
    <div className="header border-0 bg-green-400 fixed top-0 w-full z-50 h-12 flex items-center rounded-b-lg">
      <div style={{ maxWidth: 1400 }} className="w-full border-0 mx-auto">
        <ul className="flex justify-between px-4 text-black border-0 items-center gap-8">
          <li className="w-min">
            <Link href="/">Home</Link>
          </li>
          <li className="w-min">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="w-full">
            <Input variant="outlined" label="Search title" className=""/>
          </li>
        </ul>
      </div>
    </div>
  );
}
