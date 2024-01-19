import {
  Bitcoin,
  CreditCard,
  LayoutDashboard,
  LogOut,
  type LucideIcon,
  Speaker,
  User,
} from "lucide-react";

export type SiteRoute = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const siteRoutes = {
  dashboard: {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  campaign: {
    label: "Campaign",
    href: "/campaign",
    icon: Speaker,
  },
  payment: {
    label: "Payment",
    href: "/payment",
    icon: CreditCard,
  },
  withdraw: {
    label: "Withdraw",
    href: "/withdraw",
    icon: Bitcoin,
  },
  profile: {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  logout: {
    label: "Logout",
    href: "/logout",
    icon: LogOut,
  },
};

export const SidebarData = Object.values(siteRoutes).map((linkData) => {
  return linkData;
});
