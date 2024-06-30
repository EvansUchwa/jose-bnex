"use client";
import React, { useEffect, useState } from "react";
import { getRoute, sidebarRoutes } from "../helpers/route";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

function Navbar() {
  const defHash = window.location.hash ? window.location.hash : "#";
  const [currentHash, setCH] = useState<string | undefined>(defHash);
  const cPathname = usePathname();

  // useEffect(() => {
  //   // if (defHash != "#") {
  //   document.getElementById(defHash.replace("#", ""))?.scrollIntoView();
  //   // }
  // }, []);

  return (
    <>
      <nav>
        <img src="/logo.png" alt="logo site" />
      </nav>
      <aside>
        <div>
          {sidebarRoutes.map((item, i) => (
            <Link
              key={"sidebar route nb" + i}
              href={
                getRoute(item.name)?.path! +
                (item.path == "/" ? "/#vBanner" : "")
              }
              className={
                currentHash == item.path?.replace("/", "") ||
                currentHash == item.hashPath?.replace("/", "")
                  ? "navLinkActive"
                  : ""
              }
              onClick={() => setCH(item?.hashPath?.replace("/", ""))}
              id={"navLink-" + item?.hashPath?.replace("/#", "")}
            >
              <strong>{getRoute(item.name)?.name}</strong>
              <span></span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Navbar;
