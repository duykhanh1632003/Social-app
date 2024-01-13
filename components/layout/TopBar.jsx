"use client";
import React, { useState } from "react";
import { Add, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/clerk-react";
import { Logout } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import behuong from "../../assets/pehuong.png";

const TopBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people,...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" />
      </div>
      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>
      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer items-center md:hidden">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className="text-body-bold text-light-1">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href="/">
          <Image
            src={behuong}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full h-14 w-14 md:hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
