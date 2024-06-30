"use client";
import { SliderStyle1ArrayItemType } from "@/types/slider";
import React from "react";
import { SliderStyle1Layout } from "./layout";
import { BoxTitleStyle1 } from "@/uikits/others";

const ieOptions: SliderStyle1ArrayItemType[] = [
  {
    title: "Approvisionnement et négotiation",
    desc: "BNEX Group est une entreprise innovante qui est le fruit d’une fusion unique  entre les domaines de la communication et de l’import-export. Nous visons  la Grandeur, faisons preuve de Détermination et travaillons à promouvoir  l’Innovation, telle est notre identité. Animée par une énergie de transformation percutante, elle assimile les défis avec  vigueur, absorbant les opportunités avec une efficacité remarquable, tout en  mettant en œuvre des stratégies où la créativité occupe une place centrale.",
    bgImageName: "importExport.webp",
  },
  {
    title: "Logistique",
    desc: "BNEX Group est une entreprise innovante qui est le fruit d’une fusion unique  entre les domaines de la communication et de l’import-export. Nous visons  la Grandeur, faisons preuve de Détermination et travaillons à promouvoir  l’Innovation, telle est notre identité. Animée par une énergie de transformation percutante, elle assimile les défis avec  vigueur, absorbant les opportunités avec une efficacité remarquable, tout en  mettant en œuvre des stratégies où la créativité occupe une place centrale.",
    bgImageName: "importExport2.webp",
  },
  {
    title: "Support  client",
    desc: "BNEX Group est une entreprise innovante qui est le fruit d’une fusion unique  entre les domaines de la communication et de l’import-export. Nous visons  la Grandeur, faisons preuve de Détermination et travaillons à promouvoir  l’Innovation, telle est notre identité. Animée par une énergie de transformation percutante, elle assimile les défis avec  vigueur, absorbant les opportunités avec une efficacité remarquable, tout en  mettant en œuvre des stratégies où la créativité occupe une place centrale.",
    bgImageName: "importExport3.webp",
  },
];

function ImportExport() {
  return (
    <div className="pageContainer home-import-export" id="import-export">
      <section>
        <BoxTitleStyle1 title="BNEX import-export" />
        <SliderStyle1Layout
          sliderItems={ieOptions}
          sliderContainerBgId="importExport"
          autoSlideTime={3000}
        />
      </section>
    </div>
  );
}

export default ImportExport;
