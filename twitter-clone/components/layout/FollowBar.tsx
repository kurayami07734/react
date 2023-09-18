import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";
import { User } from "@prisma/client";

function FollowBar() {
  const { data: users = [] } = useUsers();
  if (users.length === 0) return null;
  return (
    <div className="hidden px-4 py-4 lg:block">
      <div className="rounded-xl bg-neutral-800 p-4">
        <h2 className="text-xl font-semibold text-white">Who to follow?</h2>
        <div className="mt-4 flex flex-col gap-6">
          {users.map((user: User) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-white ">{user.name}</p>
                <p className="text-sm text-neutral-400">{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FollowBar;
