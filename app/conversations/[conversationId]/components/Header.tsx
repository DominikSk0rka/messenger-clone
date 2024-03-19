"use client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import ProfileDrawer from "./ProfileDrawer";

interface HeaderProps {
  convesation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ convesation }) => {
  const otherUser = useOtherUser(convesation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const statusText = useMemo(() => {
    if (convesation.isGroup) {
      return `${convesation.users.length} members`;
    }

    return "Active";
  }, [convesation]);
  return (
    <>
      <ProfileDrawer
        data={convesation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div
        className="
    bg-white
    w-full
    flex
    border-b-[1px]
    sm:px-4
    py-4
    lg:px-6
    justify-between
    items-center
    shadow-sm
    "
      >
        <div className="flex gap-3 items-center">
          <Link
            href="/convesations"
            className="
        lg:hidden
        block
        text-sky-500
        hover:test-sky-600
        transition
        cursor-pointer"
          >
            <HiChevronLeft size={32} />
          </Link>
          <Avatar user={otherUser} />
          <div className="flex flex-col">
            <div>{convesation.name || otherUser.name}</div>
            <div
              className="
            text-sm
            font-light
            text-neutral-500"
            >
              {statusText}
            </div>
          </div>
        </div>
        <HiEllipsisHorizontal
          size={32}
          onClick={() => setDrawerOpen(true)}
          className="text-sky-500 cursor-pointer hover:text-sky-600 transition"
        />
      </div>
    </>
  );
};

export default Header;
