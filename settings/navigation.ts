export interface LinkItem {
  name: string;
  link: string;
}

export const Links : LinkItem[] = [
  {
    name:"Accueil",
    link:"#Accueil"
  },
  {
    name:"À propos",
    link:"#Propos"
  },
  {
    name:"Formations",
    link:"#Formation"
  },
  {
    name:"Certificates",
    link:"#Certificate"
  },
  {
    name:"Actualités",
    link:"#Actualite"
  },
  {
    name:"Contact",
    link:"#Contact"
  },
]
export interface ChildrenItem {
  title: string;
  path: string;
  allowedRoles: string[];
}
export interface NavigationItem {
  title: string;
  icon: string;
  path: string;
  children?: ChildrenItem[];
  allowedRoles: string[];
}

export const adminNavigation: NavigationItem[] = [
  {
    title: "Dashboard",
    icon: "material-symbols:dashboard",
    path: "/admin",
    allowedRoles: ["USER"],
  },
  {
    title: "Test",
    icon: "material-symbols:dashboard",
    path: "/test",
    allowedRoles: ["ADMIN", "USER"],
  },
  {
    title: "Paramètres",
    icon: "material-symbols:settings",
    path: "/dashboard/settings",
    allowedRoles: ["USER"],
  },
  {
    title: "Pages",
    icon: "eos-icons:admin",
    path: "#",
    children: [
      {
        title: "Client",
        path: "/dashboard/client",
        allowedRoles: ["USER"],
      },
      {
        title: "Server",
        path: "/dashboard/server",
        allowedRoles: ["USER"],
      },
    ],
    allowedRoles: ["USER"],
  },
];
