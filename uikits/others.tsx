import { BoxTitleStyle1PropsType } from "@/types/others";
import React from "react";

export function BoxTitleStyle1({ title }: BoxTitleStyle1PropsType) {
  return (
    <div className="boxTitleStyle1">
      <h3>{title}</h3>
    </div>
  );
}
