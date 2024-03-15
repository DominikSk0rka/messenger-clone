import { usePathname } from "next/navigation";
import useConversation from "./useConversation";
import { useMemo } from "react";
import { HiChat, HiUsers } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

const useRoutes = () => {
  const pathname = usePathname();
  const { convesationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Czat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!convesationId,
      },
      {
        label: "Użytkownicy",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Wyloguj",
        href: "#",
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, convesationId]
  );
  return routes;
};

export default useRoutes;
