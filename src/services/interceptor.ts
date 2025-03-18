import type { FilterTopAnimeProps, TopAnime } from "./interfaces";


const filterTopAnime = (data: TopAnime[]) : FilterTopAnimeProps[] => {
let animeData: FilterTopAnimeProps[] = [];

	data?.forEach((item) => {
		animeData = [
			...animeData,
			{
				emision: item.airing ? "en emision" : "terminado",
				episodios: item.episodes,
				generos: [...item.genres],
				titulo: item.title,
				cardImage: item.images.webp.large_image_url,
				id: item.mal_id,
				url: item.url,
			},
		];
	});

  return animeData;
};

export {
  filterTopAnime
}