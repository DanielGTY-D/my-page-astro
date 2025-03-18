import React, { useEffect, useState } from "react";
import styles from "./DynSections.module.css";
import type {
	FilterTopAnimeProps,
	SectionConfig,
} from "../../services/interfaces";
import { getTopAnime } from "../../services/API";
import Slider from "../swiper/Slider";

interface DynSectionsProps {
	sections: SectionConfig;
}

const fetchFunctions: Record<string, () => Promise<FilterTopAnimeProps[]>> = {
	getTopAnime,
};

export default function DynSections({ sections }: DynSectionsProps) {
	const [animeData, setAnimeData] = useState<FilterTopAnimeProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const fetchFunction = fetchFunctions[sections.functionName];

			if (!fetchFunction) {
				console.error("La funcion " + sections.functionName, "no existe");
				return;
			}

			try {
				const data: FilterTopAnimeProps[] = await fetchFunction();
				setAnimeData([...animeData, ...data]);
			} catch (error) {}
		};

		fetchData();
	}, [sections.functionName]);

	return (
		<>
			<section>
				<h2>{sections.title}</h2>

				{sections.useSwiper ? (
					<Slider
						data={animeData}
						swiperBreackpoints={{
							640: { slidesPerView: 1 },
							768: { slidesPerView: 3 },
							1024: { slidesPerView: 3 },
							1280: { slidesPerView: 4 },
						}}
					>
						
					</Slider>
				) : (
					<></>
				)}
			</section>
		</>
	);
}
