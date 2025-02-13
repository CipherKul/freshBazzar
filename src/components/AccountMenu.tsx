"use client"

import { useRouter } from "next/navigation"
import { User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function AccountMenu() {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative h-10 w-10 hover:bg-gray-100 rounded-full"
        >
          <User className="h-5 w-5 text-gray-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 mt-2 p-2 bg-white border rounded-lg shadow-lg"
      >
        <DropdownMenuItem 
          className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 rounded-md"
          onClick={() => router.push("/account/profile")}
        >
          <span className="mr-2">👤</span>
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 rounded-md"
          onClick={() => router.push("/account/favourite")}
        >
          <span className="mr-2">❤️</span>
          <span>Favourite</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 rounded-md"
          onClick={() => router.push("/account/my-order")}
        >
          <span className="mr-2">🛍</span>
          <span>My Orders</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 rounded-md"
        >
          <span className="mr-2">💰</span>
          <span>Wallet Points: 0</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 rounded-md text-red-600"
          onClick={() => router.push("/logout")}
        >
          <span className="mr-2">🚪</span>
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 