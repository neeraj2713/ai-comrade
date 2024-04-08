
import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./mobile-sidebar"
import { ModeToggle } from "./mode-toggle"
import { getApiLimitCount } from "@/lib/api-limit"

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount}/>
      <div className="flex w-full justify-end">
        <div className="mr-5">
          <ModeToggle />
        </div>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default Navbar