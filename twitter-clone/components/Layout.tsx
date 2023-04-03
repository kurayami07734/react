import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen bg-black">
      <div className="xl:px-30 container mx-auto h-full max-w-6xl">
        <div className="grid h-full grid-cols-4">
          <Sidebar />
          <div className="col-span-3 border-x-[1px] border-neutral-500 lg:col-span-2">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
}
export default Layout;
