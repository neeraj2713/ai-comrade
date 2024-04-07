import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./mobile-sidebar"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar/>
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