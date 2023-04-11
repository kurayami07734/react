import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemsProps {
  href: string;
  label: string;
  auth?: boolean;
  icon: IconType;
  onClick?: () => void;
}
function SidebarItem({
  href,
  label,
  icon: Icon,
  onClick,
  auth,
}: SidebarItemsProps) {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) return onClick();
    if (auth && !currentUser) loginModal.onOpen();
    else if (href) router.push(href);
  }, [router, onClick, href, auth, currentUser, loginModal]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden">
        <Icon size={28} color="white"></Icon>
      </div>
      <div className="relative hidden cursor-pointer items-center gap-4 rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:flex">
        <Icon size={28} color="white"></Icon>
        <p className="hidden text-xl text-white lg:block">{label}</p>
      </div>
    </div>
  );
}
export default SidebarItem;
