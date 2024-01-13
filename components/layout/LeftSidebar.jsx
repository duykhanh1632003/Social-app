"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import the Image component from 'next/image'
import Menu from "./Menu";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignOutButton } from "@clerk/clerk-react";
import { Logout } from "@mui/icons-material";
import logo from "../../assets/logo2.jpg";
import behuong from "../../assets/pehuong.png";
const LeftSidebar = () => {
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
      <Link href={"/"}>
        <Image src={logo} alt="profile" width={200} height={200} />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={"/"}>
            <Image
              src={behuong}
              alt="profile"
              width={"50"}
              height={"50"}
              className="rounded-full w-14 h-14"
            />
          </Link>
          <p className="text-small-bold">Duy Khanh</p>
        </div>
        <div className="flex text-light-1 justify-between m-2">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Follower</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
        <hr />
        <Menu />
        <hr />
        <div className="flex gap-4 items-center m-2">
          <UserButton />
          <p className="text-light-1 text-body-bold">Manage Account</p>
        </div>
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer gap-4 items-center">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className="text-body-bold text-light-1">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default LeftSidebar;
