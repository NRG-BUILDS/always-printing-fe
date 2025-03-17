import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Home from "@/assets/images/icons/home.svg";
import logo from "@/assets/images/icons/logo.png";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="bg-brand-grey text-white !border-r-0"
    >
      <SidebarHeader className="bg-brand-grey">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="group-data-[collapsible=icon]:!size-16"
              asChild
            >
              <a href={"/"}>
                <img src={logo} alt="" className="size-20 object-contain" />

                <span>Always Printing</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-brand-grey ">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="group-data-[collapsible=icon]:!size-20"
                    asChild
                  >
                    <a href={item.url}>
                      <img
                        src={item.icon}
                        alt=""
                        className="h-full object-contain"
                      />

                      <span className="text-white">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
