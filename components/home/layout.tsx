import { changeSliderContainerBg } from "@/helpers/others";
import { SliderStyle1PropsType } from "@/types/slider";
import { PhCaretCircleLeftBold, PhCaretCircleRightBold } from "@/uikits/icons";
import Slider from "react-slick";

type HomeSectionBackgroundLayout = React.PropsWithChildren & {
  bannerImg?: string;
};
export function HomeSectionBackgroundLayout(
  props: HomeSectionBackgroundLayout
) {
  const { children, bannerImg } = props;
  return (
    <div
      className="homeBackgrounContainer"
      style={{
        backgroundImage: "url(/banners/" + bannerImg + ".webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id={"bgContainerFor-" + bannerImg}
    >
      {children}
    </div>
  );
}

export function SliderStyle1Layout({
  sliderItems,
  sliderContainerBgId,
  autoSlideTime,
}: SliderStyle1PropsType) {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: autoSlideTime,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PhCaretCircleRightBold />,
    prevArrow: <PhCaretCircleLeftBold />,
    customPaging: (i: number) => (
      <div>
        <b>{sliderItems[i].title}</b>
        <span></span>
      </div>
    ),
    afterChange: (i: number) =>
      changeSliderContainerBg(sliderItems, i, sliderContainerBgId),
  };

  return (
    <div className="sliderStyle1">
      <Slider {...settings}>
        {sliderItems.map((item, i) => (
          <div key={"ie option nb" + i}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
