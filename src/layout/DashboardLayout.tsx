import { Outlet, useLocation, Link } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { appRoutes } from "@/routes";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/sonner";

function DynamicBreadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const breadcrumbs: { name: string; href: string }[] = [];
  let currentRoutes = appRoutes;

  let href = "";
  for (let i = 0; i < segments.length; i++) {
    href += `/${segments[i]}`;

    const match =
      currentRoutes.find((r) => r.path.replace("/", "") === segments[i]) ??
      currentRoutes
        .flatMap((r) => r.children ?? [])
        .find((c) => c.path === segments[i]);

    if (match) {
      breadcrumbs.push({ name: match.title, href });
      currentRoutes = match.children ?? [];
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, idx) => (
          <BreadcrumbItem key={crumb.href}>
            {idx !== breadcrumbs.length - 1 ? (
              <>
                <BreadcrumbLink asChild>
                  <Link to={crumb.href}>{crumb.name}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <DynamicBreadcrumbs />
            </div>
            <ModeToggle />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
          <Toaster expand visibleToasts={5} richColors={true} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
