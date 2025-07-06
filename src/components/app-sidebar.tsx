import * as React from "react";
import {
  // AlertTriangleIcon,
  // BarChartIcon,
  // AudioWaveform,
  // BookOpen,
  // Landmark,
  // Command,
  // Frame,
  // GalleryVerticalEnd,
  // Map,
  // PieChart,
  // ReceiptIcon,
  // Settings2,
  // SettingsIcon,
  // ShoppingCartIcon,
  // SquareKanban,
  // StickerIcon,
  // TruckIcon,
  // WarehouseIcon,
  Diamond,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { useLocation } from "react-router-dom";
import { type RouteItem, appRoutes } from "@/routes";
import type { LucideIcon } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

export type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    isActive?: boolean;
  }[];
};

function mapRoutesToNav(routes: RouteItem[], currentPath: string): NavItem[] {
  return routes.map((route) => {
    const fullPath = `/${route.path}`;
    const isSectionActive =
      currentPath.startsWith(fullPath + "/") || currentPath === fullPath;

    const items = route.children?.map((child) => {
      const childUrl = `${fullPath}/${child.path}`;
      return {
        title: child.title,
        url: childUrl,
        isActive: currentPath === childUrl,
      };
    });

    return {
      title: route.title,
      url: fullPath,
      icon: route.icon,
      isActive: isSectionActive,
      items,
    };
  });
}

// This is sample data.
// const data = {
//     user: {
//         name: "shadcn",
//         email: "m@example.com",
//         avatar: "/avatars/shadcn.jpg",
//     },
//     teams: [
//         {
//             name: "KPTC",
//             logo: Diamond,
//             plan: "Garage Management System",
//         },
//     ],
//     navMain: [
//         {
//             title: "Dashboard",
//             url: "dashboard",
//             icon: SquareKanban,
//             isActive: true,
//             items: [
//                 { title: "Admin", url: "dashboard/admin" },
//                 { title: "Executive Management", url: "#" },
//                 { title: "Contracting Party", url: "#" },
//             ],
//         },
//         {
//             title: "MOI Reception",
//             url: "moi-reception",
//             icon: Landmark,
//             items: [
//                 { title: "Job Card", url: "moi-reception/job-card" },
//                 { title: "Assign Inspector", url: "#" },
//                 { title: "Assign Technician", url: "#" },
//             ],
//         },
//     ],
//     projects: [
//         {
//             name: "Design Engineering",
//             url: "#",
//             icon: Frame,
//         },
//         {
//             name: "Sales & Marketing",
//             url: "#",
//             icon: PieChart,
//         },
//     ],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const currentPath = location.pathname;

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "KPTC",
        logo: Diamond,
        plan: "Garage Management System",
      },
    ],
    navMain: mapRoutesToNav(appRoutes, currentPath),
  };
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="scrollbar-thin scrollbar-rounded">
          <NavMain items={data.navMain} />
        </ScrollArea>
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
