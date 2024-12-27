import { Contact, Home, Info, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,

  },
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Contact,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (

    <Sidebar>
      <SidebarContent className="sidebar-content">
        <SidebarGroup>
          <SidebarGroupLabel className="sidebar-title text-sm mb-2">Luminous</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="ml-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>

                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="self-end flex-row">
        <p className="self-center mr-2">Theme</p>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}