import { BsBellFill, BsHouseFill } from "react-icons/bs";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
function Sidebar() {
  const { data: currentUser } = useCurrentUser();
  const links = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      auth: true,
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/user/123",
      auth: true,
      icon: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {links.map((link) => (
            <SidebarItem
              key={link.href}
              href={link.href}
              label={link.label}
              auth={link.auth}
              icon={link.icon}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              href=""
              label="Logout"
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
