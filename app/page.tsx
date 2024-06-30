"use client";
import React, { ReactElement } from "react";
import About from "@/components/home/about";
import pageLayout from "../hocs/ly";
import ImportExport from "@/components/home/import-export";
import Studio from "@/components/home/studio";
import Partners from "@/components/home/partners";
import Contact from "@/components/home/contact";
import VBanner from "@/components/home/vBanner";
import { HomeSectionBackgroundLayout } from "@/components/home/layout";

function Home() {
  const homeSubComponenents = [
    { component: <VBanner /> },
    { component: <About />, bannerImg: "about" },
    { component: <ImportExport />, bannerImg: "importExport" },
    { component: <Studio />, bannerImg: "studio" },
    { component: <Partners />, bannerImg: "partner" },
    { component: <Contact />, bannerImg: "contact" },
  ];
  return (
    <div className="home">
      {homeSubComponenents.map((item, i) => {
        if (i == 0)
          return (
            <React.Fragment key={"hom subcomp" + i}>
              {item.component}
            </React.Fragment>
          );
        return (
          <HomeSectionBackgroundLayout
            bannerImg={item?.bannerImg}
            key={"hom subcomp" + i}
          >
            {item.component}
          </HomeSectionBackgroundLayout>
        );
      })}
    </div>
  );
}

export default pageLayout(Home);
