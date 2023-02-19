import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Scrollbar, Navigation } from "swiper";
import { baseUrl } from "../../constant";

const Slider = ({ items }) => {
    return (
        <Swiper
            dir="rtl"
            slidesPerView={1}
            grabCursor={true}
            scrollbar={true}
            navigation={true}
            loop={true}
            modules={[Scrollbar, Navigation]}
            className="swiperSlider avatarSlider h-[240px] w-[420px]"
        >
            {items.map(item => {
                return <SwiperSlide>
                    <img src={baseUrl + '/' + item.path} alt="avatar" />
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default Slider