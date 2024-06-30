"use client";
import { useEffect, useState } from "react";

interface Props {
  [key: string]: any;
}

function pageLayout(
  WrappedComponent: React.ComponentType
): React.ComponentType {
  function HOC(props: Props) {
    const [visibleElement, setVisibleElement] = useState<string | null>(null);
    useEffect(() => {
      const vBannerBox = document.querySelector("#vBanner") as HTMLElement;
      const aboutBox = document.querySelector("#about") as HTMLElement;
      const ieBox = document.querySelector("#import-export") as HTMLElement;
      const studioBox = document.querySelector("#studio") as HTMLElement;
      const partnersBox = document.querySelector("#partners") as HTMLElement;
      const contactBox = document.querySelector("#contact") as HTMLElement;

      const options = {
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (visibleElement !== entry.target.id) {
              setVisibleElement(entry.target.id);
              console.log("Scrolled to: " + entry.target.id);
              document
                .getElementById("navLink-" + entry.target.id)
                ?.classList.add("navLinkActive");
              // router.push("/#" + entry.target.id);
            } else {
              document
                .getElementById("navLink-" + entry.target.id)
                ?.classList.remove("navLinkActive");
            }
          } else {
            document
              .getElementById("navLink-" + entry.target.id)
              ?.classList.remove("navLinkActive");
          }
        });
      }, options);

      vBannerBox && observer.observe(vBannerBox);
      aboutBox && observer.observe(aboutBox);
      ieBox && observer.observe(ieBox);
      studioBox && observer.observe(studioBox);
      partnersBox && observer.observe(partnersBox);
      contactBox && observer.observe(contactBox);

      return () => {
        vBannerBox && observer.unobserve(vBannerBox);
        aboutBox && observer.unobserve(aboutBox);
        ieBox && observer.unobserve(ieBox);
        studioBox && observer.unobserve(studioBox);
        partnersBox && observer.unobserve(partnersBox);
        contactBox && observer.unobserve(contactBox);
      };
    }, []);
    return <WrappedComponent {...props} />;
  }

  return HOC;
}

export default pageLayout;
