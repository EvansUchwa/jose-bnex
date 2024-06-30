import { SliderStyle1ArrayItemType } from "../types/slider";

export function changeSliderContainerBg(
  slidersItem: SliderStyle1ArrayItemType[],
  i: number,
  containerId: string
) {
  let bgContaner = document.getElementById(
    "bgContainerFor-" + containerId
  ) as HTMLDivElement;
  bgContaner.style.backgroundImage =
    "url(/banners/" + slidersItem[i].bgImageName + ")";
}
