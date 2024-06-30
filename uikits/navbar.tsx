"use client";
import React, { useEffect, useState } from "react";
import { getRoute, sidebarRoutes } from "../helpers/route";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getDefaulthash() {
  if (typeof window !== "undefined") {
    return window.location.hash ? window.location.hash : "#vBanner";
  }
  return "#vBanner";
}
function Navbar() {
  const defHash = getDefaulthash();
  const [currentHash, setCH] = useState<string>(defHash);
  const cPathname = usePathname();
  const [scrollAfterNav, setSAN] = useState<boolean>(false);

  useEffect(() => {
    if (defHash != "#") {
      document.getElementById(defHash.replace("#", ""))?.scrollIntoView();
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (e) => {
        if (window.scrollY > 250) {
          let navImg = document.querySelector("nav img") as HTMLElement;
          // navImg.style.opacity = "0.2";
          !scrollAfterNav && setSAN(true);
        } else {
          setSAN(false);
        }
      });
    }
  }, []);

  return (
    <>
      <nav>
        <img
          src="/logo.png"
          alt="logo site"
          className={scrollAfterNav ? "navLogoHided" : ""}
        />
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
              onClick={() => setCH(item.hashPath!.replace("/", ""))!}
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
