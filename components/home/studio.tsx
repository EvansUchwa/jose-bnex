"use client";
import { SliderStyle1ArrayItemType } from "@/types/slider";
import React from "react";
import { SliderStyle1Layout } from "./layout";
import { BoxTitleStyle1 } from "@/uikits/others";

const ieOptions: SliderStyle1ArrayItemType[] = [
  {
    title: "Design graphique",
    desc: "BNEX studio est un incubateur d’idées. Il intervient dans le domaine de la communication, des solutions numériques et graphiques, de l'événementiel, du design intérieur et de la photographie, offrant ainsi une gamme complète de services  pour répondre aux besoins variés de ses clients. Ce studio créatif polyvalent se décline en sept départements distincts",
    bgImageName: "studio.webp",
  },
  {
    title: "Marketing",
    desc: "BNEX studio est un incubateur d’idées. Il intervient dans le domaine de la communication, des solutions numériques et graphiques, de l'événementiel, du design intérieur et de la photographie, offrant ainsi une gamme complète de services  pour répondre aux besoins variés de ses clients. Ce studio créatif polyvalent se décline en sept départements distincts",
    bgImageName: "studio2.webp",
  },
  {
    title: "3D",
    desc: "BNEX studio est un incubateur d’idées. Il intervient dans le domaine de la communication, des solutions numériques et graphiques, de l'événementiel, du design intérieur et de la photographie, offrant ainsi une gamme complète de services  pour répondre aux besoins variés de ses clients. Ce studio créatif polyvalent se décline en sept départements distincts",
    bgImageName: "studio3.webp",
  },
  {
    title: "Design numérique",
    desc: "BNEX studio est un incubateur d’idées. Il intervient dans le domaine de la communication, des solutions numériques et graphiques, de l'événementiel, du design intérieur et de la photographie, offrant ainsi une gamme complète de services  pour répondre aux besoins variés de ses clients. Ce studio créatif polyvalent se décline en sept départements distincts",
    bgImageName: "studio4.webp",
  },
  {
    title: "Développement web",
    desc: "BNEX studio est un incubateur d’idées. Il intervient dans le domaine de la communication, des solutions numériques et graphiques, de l'événementiel, du design intérieur et de la photographie, offrant ainsi une gamme complète de services  pour répondre aux besoins variés de ses clients. Ce studio créatif polyvalent se décline en sept départements distincts",
    bgImageName: "studio5.webp",
  },
  {
    title: "Photo-vidéo",
    desc: "BNEX studio est un incubateur d’idées. Il intervient dans le domaine de la communication, des solutions numériques et graphiques, de l'événementiel, du design intérieur et de la photographie, offrant ainsi une gamme complète de services  pour répondre aux besoins variés de ses clients. Ce studio créatif polyvalent se décline en sept départements distincts",
    bgImageName: "studio6.webp",
  },
  {
    title: "Événementiel",
    desc: "BNEX studio est un incubateur d’idées. Il intervient dans le domaine de la communication, des solutions numériques et graphiques, de l'événementiel, du design intérieur et de la photographie, offrant ainsi une gamme complète de services  pour répondre aux besoins variés de ses clients. Ce studio créatif polyvalent se décline en sept départements distincts",
    bgImageName: "studio7.webp",
  },
];

function Studio() {
  return (
    <div className="pageContainer home-import-export" id="studio">
      <section>
        <BoxTitleStyle1 title="BNEX import-export" />
        <SliderStyle1Layout
          sliderItems={ieOptions}
          sliderContainerBgId="studio"
          autoSlideTime={3500}
        />
      </section>
    </div>
  );
}

export default Studio;
