import React from "react";
import type { FilterTopAnimeProps } from "../../services/interfaces";
import styles from "./Card.module.css";

interface CardProps {
	info: FilterTopAnimeProps;
}

export default function Card({ info }: CardProps) {
	return (
		<>
			<a href={info.url} id={String(info.id)} className={styles.card}>
				<img src={info.cardImage} alt={info.titulo} />

				<div className={styles.card__info}>
					<h3>{info.titulo}</h3>

					<p>{info.emision}</p>
					<p>{info.episodios}</p>

					{info.generos.length > 0 && (
						<div className={styles.card__genres}>
							{info.generos.map((genero) => (
								<a key={genero.mal_id} id={String(genero.mal_id)}>
									{genero.name}
								</a>
							))}
						</div>
					)}
				</div>
			</a>
		</>
	);
}
