// import React
import React, { useEffect } from "react";
import Card from "../cards/card"

// import Swiper core and required modules
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { FilterTopAnimeProps } from "../../services/interfaces";

interface SliderProps {
	data: FilterTopAnimeProps[];
	swiperBreackpoints: SwiperBreackpointsConfigProps;
}

interface SwiperBreackpointsConfigProps {
	640: { slidesPerView: number };
	768: { slidesPerView: number };
	1024: { slidesPerView: number };
	1280: { slidesPerView: number };
}

const Slider = ({ swiperBreackpoints, data }: SliderProps) => {
	const swiperBreackpointsConfig = {
		640: { slidesPerView: swiperBreackpoints[640].slidesPerView },
		768: { slidesPerView: swiperBreackpoints[768].slidesPerView },
		1024: { slidesPerView: swiperBreackpoints[1024].slidesPerView },
		1280: { slidesPerView: swiperBreackpoints[1280].slidesPerView },
	};

	return (
		<Swiper
			// install Swiper modules
			modules={[Autoplay, Scrollbar, A11y]}
			speed={1500}
			spaceBetween={30}
			slidesPerView={"auto"}
			breakpoints={swiperBreackpointsConfig}
			autoplay={{
				delay: 2500,
				disableOnInteraction: true,
				pauseOnMouseEnter: true
			}}
			pagination={{ clickable: false }}
			scrollbar={{ draggable: true }}

		>
			{data.map((element) => (
				<SwiperSlide>
					<Card info={element} key={element.id}/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
