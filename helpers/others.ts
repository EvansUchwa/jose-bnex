import { SliderStyle1ArrayItemType } from "../types/slider";

export function changeSliderContainerBg(
  slidersItem: SliderStyle1ArrayItemType[],
  i: number,
  containerId: string
) {
  console.log(i);

  let bgContaner = document.getElementById(
    "bgContainerFor-" + containerId
  ) as HTMLDivElement;
  console.log(slidersItem[i].bgImageName);

  bgContaner.style.backgroundImage =
    "url(/banners/" + slidersItem[i].bgImageName + ")";
}
