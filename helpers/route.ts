import { routeHelperType } from "@/types/route";

export const allRoutes: routeHelperType[] = [
  { name: "Accueil", path: "/", hashPath: "/#vBanner" },
  { name: "A propos", path: "/#about", hashPath: "/#about" },
  {
    name: "Import/Export",
    path: "/#import-export",
    hashPath: "/#import-export",
  },
  { name: "Studio", path: "/#studio", hashPath: "/#studio" },
  { name: "Partenaires", path: "/#partners", hashPath: "/#partners" },
  { name: "Contact", path: "/#contact", hashPath: "/#contact" },
];

export const sidebarRoutes = [
  { ...allRoutes[0] },
  { ...allRoutes[1] },
  { ...allRoutes[2] },
  { ...allRoutes[3] },
  { ...allRoutes[4] },
  { ...allRoutes[5] },
];

export function getRoute(name: string): routeHelperType | null {
  const filter = allRoutes.filter(
    (item) => item.name.toLocaleLowerCase() == name.toLocaleLowerCase()
  );
  if (filter) return filter[0];
  return null;
}
