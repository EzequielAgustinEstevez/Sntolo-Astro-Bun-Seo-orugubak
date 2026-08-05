import { media } from "./media"

export const social = {
	seferina: "https://www.instagram.com/seferina._/",
	sayt: "https://www.instagram.com/sayt.calligraphy/"
}

export const ui = {
	playButton: media("2023/08/playButton.webp"),
	downloadButton: media("2023/08/downloadButton.webp"),
	separator: media("2023/08/separator2.webp"),
	verticalDivisor: media("2023/07/Recurso-17.webp"),
	symbolSeparator: media("2023/08/image.webp"),
	seferinaLogo: media("2023/07/Recurso-9-1.webp"),
	// Archived under 2023/08 (2024/06 copies were not captured by Wayback)
	oraculoDesktop: media("2023/08/Sayt-logo.png"),
	oraculoMobile: media("2023/08/sant-responsive.webp"),
	backgroundFonts: media("2023/11/background-fonts-scaled.webp"),
	logo: media("2023/08/sntoloLogo.webp")
}

/** Symbol grid order as in the WordPress home. */
export const symbols = [
	{ src: media("2023/08/6-Presagios.webp"), alt: "Presagios" },
	{ src: media("2023/08/5-Pork.webp"), alt: "Pork" },
	{ src: media("2023/08/1-Pit-el-beat.webp"), alt: "Pit, el beat" },
	{ src: media("2023/08/3-Para-estar-conmigo.webp"), alt: "Para estar conmigo" },
	{ src: media("2023/08/4-Momo.webp"), alt: "Momo" },
	{ src: media("2023/08/2-Un-todo-complejo.webp"), alt: "Un todo complejo" }
]

export type Track = {
	number: number
	title: string
	label: string
	image: string
	audio: string
	downloadName: string
}

export const tracks: Track[] = [
	{
		number: 1,
		title: "Pit, el beat",
		label: "| 1 | Pit, el beat |",
		image: media("2023/08/1-Pit-el-beat.webp"),
		audio: media("2023/08/1.Pit-V3.mp3"),
		downloadName: "1-Pit el beat"
	},
	{
		number: 2,
		title: "Un todo complejo",
		label: "| 2 | Un todo complejo |",
		image: media("2023/08/2-Un-todo-complejo.webp"),
		audio: media("2023/08/2.Un-Todo-V3.mp3"),
		downloadName: "2-Un todo complejo"
	},
	{
		number: 3,
		title: "Para estar conmigo",
		label: "| 3 | Para estar conmigo |",
		image: media("2023/08/3-Para-estar-conmigo.webp"),
		audio: media("2023/08/3.Para-Estar-V2.mp3"),
		downloadName: "3-Para estar conmigo"
	},
	{
		number: 4,
		title: "Presagios",
		label: "| 4 | Presagios |",
		image: media("2023/08/6-Presagios.webp"),
		audio: media("2023/08/4.Presagio-V2.mp3"),
		downloadName: "4-Presagios"
	},
	{
		number: 5,
		title: "Pork",
		label: "| 5 | Pork |",
		image: media("2023/08/5-Pork.webp"),
		audio: media("2023/08/5.Pork-V2.mp3"),
		downloadName: "5-Pork"
	},
	{
		number: 6,
		title: "Momo",
		label: "| 6 | Momo |",
		image: media("2023/08/4-Momo.webp"),
		audio: media("2023/08/6.Momo-V2.mp3"),
		downloadName: "6-Momo"
	}
]

export type Demon = {
	name: string
	cover: string
	gif: string
}

export const demons: Demon[] = [
	{
		name: "Sntolo",
		cover: media("2023/08/SNTOLO_cover.webp"),
		gif: media("2023/08/SNTOLO-1.gif")
	},
	{
		name: "Oliv",
		cover: media("2023/08/OLIV_cover.webp"),
		gif: media("2023/08/OLIV.gif")
	},
	{
		name: "Sub",
		cover: media("2023/08/SUB_cover.webp"),
		gif: media("2023/08/SUB.gif")
	},
	{
		name: "Lilith",
		cover: media("2023/08/LILITH_cover.webp"),
		gif: media("2023/08/LILITH.gif")
	},
	{
		name: "Neia",
		cover: media("2023/08/NEIA_cover.webp"),
		gif: media("2023/08/NEIA.gif")
	},
	{
		name: "Momo",
		cover: media("2023/08/MOMO_cover.webp"),
		gif: media("2023/08/MOMO.gif")
	}
]

export type PhotoLink = {
	href: string
	src: string
	alt: string
	slot: "div1" | "div2" | "div3" | "div4" | "center" | "div5" | "div6"
}

export const photoCollage: PhotoLink[] = [
	{
		href: "/lilith-2",
		src: media("2023/11/personaje1.webp"),
		alt: "Lilith",
		slot: "div1"
	},
	{
		href: "/neia-2",
		src: media("2024/04/persomaje22.png"),
		alt: "Neia",
		slot: "div2"
	},
	{
		href: "/psynapse",
		src: media("2023/11/personaje3.webp"),
		alt: "Psynapse",
		slot: "div3"
	},
	{
		href: "/momo-2",
		src: media("2023/11/personaje4.webp"),
		alt: "Momo",
		slot: "div4"
	},
	{
		href: "/zarine",
		src: media("2023/11/personaje5.webp"),
		alt: "Zarine",
		slot: "center"
	},
	{
		href: "/sub-2",
		src: media("2023/11/personaje6.webp"),
		alt: "Sub",
		slot: "div5"
	},
	{
		href: "/oliv-2",
		src: media("2023/11/personaje7.webp"),
		alt: "Oliv",
		slot: "div6"
	},
	{
		href: "/sntolo-3",
		src: media("2023/11/personaje8.webp"),
		alt: "Sntolo",
		slot: "center"
	}
]

export type CreditGroup = {
	title: string
	people: string[]
}

export const credits: CreditGroup[] = [
	{
		title: "- Músicos -",
		people: [
			"Santiago Aguilera\n(Sntolo)",
			"Sebastian Sayt\n(Sub) / (sayt.calligraphy)",
			"Joaquin Oliva\n(Olivi)"
		]
	},
	{
		title: "- Performers -",
		people: [
			"Yamila Gottig\n(Llilith)",
			"Iara Estigarribia\n(Ileia)",
			"Melanie Zarate\n(Psynapse)",
			"Denise Hoffmann\n(Zarine)",
			"Emiliano Cornetto\n(Momo)"
		]
	},
	{
		title: "- Indumentaria y Maquillaje -",
		people: ["Antonella Leanza\n(Seferina)"]
	},
	{
		title: "- Fotografía -",
		people: ["Bruno Isse"]
	},
	{
		title: "- Grabación y Producción (Tres Gemas) -",
		people: ["Fernando Uñates"]
	},
	{
		title: "- Coach, Guitar Dr. y Asistente de grabación -",
		people: ["Manolo Lagos"]
	},
	{
		title: "- Drum Dr. -",
		people: ["Lucas Lacolla"]
	},
	{
		title: "- Ingeniero de grabación y de master -",
		people: ["Pedro Mondejar"]
	},
	{
		title: "- Mezcla (NTP Estudio) -",
		people: ["Lautaro De La Veccia"]
	},
	{
		title: "- Desarrollo Web -",
		people: ["Ezequiel Estevez"]
	}
]

export type Character = {
	slug: string
	name: string
	banner?: string
	/** Sub page shows Seferina logo instead of a banner. */
	showLogoInsteadOfBanner?: boolean
	gallery: string[]
	credits: {
		vestuario: string
		fotografia: string
	}
}

export const characters: Character[] = [
	{
		slug: "lilith-2",
		name: "Lilith",
		banner: media("2024/05/lilitHeader-scaled.webp"),
		gallery: [
			media("2024/05/lilith01.png"),
			media("2024/05/lilith02.png"),
			media("2024/05/lilith03.png"),
			media("2024/05/lilith04.png"),
			media("2024/05/lilith05.png"),
			media("2024/05/lilith06.png"),
			media("2024/05/lilith07.png")
		],
		credits: { vestuario: "Antonella Leanza", fotografia: "Bruno Isse" }
	},
	{
		slug: "neia-2",
		name: "Neia",
		banner: media("2024/06/neia-home.webp"),
		gallery: [
			media("2024/06/neia01-scaled.jpg"),
			media("2024/06/neia02-scaled.jpg"),
			media("2024/06/neia03-scaled.jpg"),
			media("2024/06/neia04-scaled.jpg"),
			media("2024/06/neia05-scaled.jpg"),
			media("2024/06/neia06-scaled.jpg")
		],
		credits: { vestuario: "Antonella Leanza", fotografia: "Bruno Isse" }
	},
	{
		slug: "psynapse",
		name: "Psynapse",
		banner: media("2024/06/psynapse-home.webp"),
		gallery: [
			media("2024/06/psynapse01-scaled.jpg"),
			media("2024/06/psynapse02-scaled.jpg"),
			media("2024/06/psynapse03-scaled.jpg"),
			media("2024/06/psynapse04-scaled.jpg"),
			media("2024/06/psynapse05-scaled.jpg"),
			media("2024/06/psynapse06-scaled.jpg")
		],
		credits: { vestuario: "Antonella Leanza", fotografia: "Bruno Isse" }
	},
	{
		slug: "momo-2",
		name: "Momo",
		banner: media("2024/06/momo-home.webp"),
		gallery: [
			media("2024/06/momo01-scaled.jpg"),
			media("2024/06/momo02-scaled.jpg"),
			media("2024/06/momo03-scaled.jpg"),
			media("2024/06/momo04-scaled.jpg"),
			media("2024/06/momo05-scaled.jpg"),
			media("2024/06/momo06-scaled.jpg"),
			media("2024/06/momo07-scaled.jpg"),
			media("2024/06/momo08-scaled.jpg")
		],
		credits: { vestuario: "Antonella Leanza", fotografia: "Bruno Isse" }
	},
	{
		slug: "zarine",
		name: "Zarine",
		banner: media("2024/06/Zarine-home.webp"),
		gallery: [
			media("2024/06/zarine01-scaled.jpg"),
			media("2024/06/zarine02-scaled.jpg"),
			media("2024/06/zarine03-scaled.jpg"),
			media("2024/06/zarine04-scaled.jpg"),
			media("2024/06/zarine05-scaled.jpg"),
			media("2024/06/zarine06-scaled.jpg")
		],
		credits: { vestuario: "Antonella Leanza", fotografia: "Bruno Isse" }
	},
	{
		slug: "sub-2",
		name: "Sub",
		showLogoInsteadOfBanner: true,
		gallery: [
			media("2024/06/sub01-scaled.jpg"),
			media("2024/06/sub02-scaled-e1719198108409.jpg"),
			media("2024/06/sub03-scaled.jpg"),
			media("2024/06/sub04-scaled.jpg"),
			media("2024/06/sub05-scaled.jpg"),
			media("2024/06/sub06-scaled.jpg")
		],
		credits: { vestuario: "Antonella Leanza", fotografia: "Bruno Isse" }
	},
	{
		slug: "oliv-2",
		name: "Oliv",
		banner: media("2024/06/oliv-home.webp"),
		gallery: [
			media("2024/06/oliv01-scaled.jpg"),
			media("2024/06/oliv02-scaled.jpg"),
			media("2024/06/oliv03-scaled.jpg"),
			media("2024/06/oliv04-scaled.jpg")
		],
		credits: { vestuario: "Antonella Leanza", fotografia: "Bruno Isse" }
	},
	{
		slug: "sntolo-3",
		name: "Sntolo",
		banner: media("2024/06/sntolo-home.webp"),
		gallery: [
			media("2024/07/Sntolo01.jpg"),
			media("2024/06/sntolo02.jpg"),
			media("2024/07/Sntolo03.jpg"),
			media("2024/06/sntolo04.jpg"),
			media("2024/07/Sntolo05.jpg"),
			media("2024/06/sntolo06.jpg"),
			media("2024/06/sntolo07.jpg")
		],
		credits: { vestuario: "Antonella Leanza", fotografia: "Bruno Isse" }
	}
]

export const getCharacter = (slug: string) =>
	characters.find((c) => c.slug === slug)
