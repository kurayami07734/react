import Image from "next/image";
import { useRouter } from "next/router";
import { SyntheticEvent, useCallback } from "react";
import useUser from "@/hooks/useUser";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

export default function Avatar({ userId, isLarge, hasBorder }: AvatarProps) {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);
  const onClick = useCallback(
    (event: SyntheticEvent) => {
      event.stopPropagation();
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`
      ${hasBorder ? "border-4 border-black" : ""}
      ${isLarge ? "h-32 w-32" : "h-12 w-12"}
      relative cursor-pointer rounded-full transition hover:opacity-90
  `}
    >
      <Image
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        alt={`Avatar of ${userId}`}
        onClick={onClick}
        src={fetchedUser?.profileImage ?? "images/placeholder.png"}
      />
    </div>
  );
}
