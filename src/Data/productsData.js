const productsData = [
  {
    id: "41250",
    images: [
      {
        id: "101",
        alt: "Product 1 Image",
        path: "assets/images/product1/product_1_main.jpg",
        thumbnail: "assets/images/product1/product_1_main_thumbnail.jpg"
      },
      {
        id: "102",
        alt: "Product 1 Image",
        path: "assets/images/product1/product_1_2.jpg",
        thumbnail: "assets/images/product1/product_1_2_thumbnail.jpg"
      },
      {
        id: "103",
        alt: "Product 1 Image",
        path: "assets/images/product1/product_1_3.jpg",
        thumbnail: "assets/images/product1/product_1_3_thumbnail.jpg"
      },
    ],
    name: "MAGIC FINISH Make-up Mousse",
    manufacturer: "M. Asam",
    price: {
      amount: 25.99,
      currency: "€",
    },
    discount: 0,
    quantity: {
      amount: 30,
      unit: "ml",
      isXXL: false,
    },
    badge: "bestSeller",
    listDescription: {
      short: "Make-up Mousse",
      long: "Kaschiert sofort Rötungen, Fältchen & Poren für ein perfektes Hautbild",
    },
    pageDescription: {
      title: "Perfekt aussehen in einer Minute",
      advantages: [
        { item: "Passt sich jedem Hautton an" },
        { item: "Kaschiert sofort Rötungen, Pigmentflecken & Fältchen" },
        { item: "Lässt Augenringe verschwinden & mattiert den Teint" },
        { item: "4-in-1 Produkt: Primer, Make-up, Puder & Concealer" },
        {
          item: "MAGIC FINISH Make-up Mousse ist die Nr. 1 Make-up Foundation in Deutschland*",
        },
      ],
    },
    ratings: 4.32,
    customersRated: 5878
  },
  {
    id: "41330",
    images: [
      {
        id: "201",
        alt: "Product 2 Image",
        path: "assets/images/product2/product_2_main.jpg",
        thumbnail: "assets/images/product2/product_2_main_thumbnail.jpg"
      },
      {
        id: "202",
        alt: "Product 2 Image",
        path: "assets/images/product2/product_2_2.jpg",
        thumbnail: "assets/images/product2/product_2_2_thumbnail.jpg"
      },
      {
        id: "203",
        alt: "Product 2 Image",
        path: "assets/images/product2/product_2_3.jpg",
        thumbnail: "assets/images/product2/product_2_3_thumbnail.jpg"
      },
    ],
    name: "PERFECT TEINT",
    manufacturer: "M. Asam",
    price: {
      amount: 22.99,
      currency: "€",
    },
    discount: 14,
    quantity: {
      amount: 30,
      unit: "ml",
      isXXL: false,
    },
    badge: "gratis",
    listDescription: {
      short: "Soforteffekt",
      long: "Sofortiger Weichzeichner für ein porenverfeinertes Hautbild",
    },
    pageDescription: {
      title: "Sofortiger Weichzeichner und Mattierer",
      advantages: [
        {
          item: "Transparentes Make-up (30 ml) lässt Falten sofort verschwinden",
        },
        { item: "Für ein ebenmäßiges, mattiertes Hautbild" },
        { item: "Weichzeichner-Effekt mit Sofort- & Langzeitwirkung" },
        { item: "Verfeinert sichtbar das Porenbild" },
        { item: "Ideal zum Mischen mit getönter Tagescreme oder Make-up" },
      ],
    },
    ratings: 3.95,
    customersRated: 1063
  },
  {
    id: "41435",
    images: [
      {
        id: "301",
        alt: "Product 3 Image",
        path: "assets/images/product3/product_3_main.jpg",
        thumbnail: "assets/images/product3/product_3_main_thumbnail.jpg"
      },
      {
        id: "302",
        alt: "Product 3 Image",
        path: "assets/images/product3/product_3_2.jpg",
        thumbnail: "assets/images/product3/product_3_2_thumbnail.jpg"
      },
      {
        id: "303",
        alt: "Product 3 Image",
        path: "assets/images/product3/product_3_3.jpg",
        thumbnail: "assets/images/product3/product_3_3_thumbnail.jpg"
      },
    ],
    name: "VINO GOLD Tages- und Nachtcreme XXL",
    manufacturer: "M. Asam",
    price: {
      amount: 24.99,
      currency: "€",
    },
    discount: 0,
    quantity: {
      amount: 200,
      unit: "ml",
      isXXL: true,
    },
    badge: "gratis",
    listDescription: {
      short: "24h Pflege",
      long: "Anti-Aging Tages- und Nachtcreme zur sichtbaren Faltentiefenreduzierung",
    },
    pageDescription: {
      title: "Internationaler 24H Creme Bestseller",
      advantages: [
        { item: "Bestseller Anti-Falten 24h Creme" },
        { item: "Faltentiefenreduzierung um durchschnittlich 48%*" },
        { item: "Für ein optimiertes & jugendlich wirkendes Hautbild" },
        { item: "Traubenwirkstoffe aus eigener Produktion" },
        { item: "Perfekte Basispflege für jeden Hauttyp" },
      ],
    },
    ratings: 4.59,
    customersRated: 584
  },
  {
    id: "41442",
    images: [
      {
        id: "401",
        alt: "Product 4 Image",
        path: "assets/images/product4/product_4_main.jpg",
        thumbnail: "assets/images/product4/product_4_main_thumbnail.jpg"
      },
      {
        id: "402",
        alt: "Product 4 Image",
        path: "assets/images/product4/product_4_2.jpg",
        thumbnail: "assets/images/product4/product_4_2_thumbnail.jpg"
      },
      {
        id: "403",
        alt: "Product 4 Image",
        path: "assets/images/product4/product_4_3.jpg",
        thumbnail: "assets/images/product4/product_4_3_thumbnail.jpg"
      },
      {
        id: "404",
        alt: "Product 4 Image",
        path: "assets/images/product4/product_4_4.jpg",
        thumbnail: "assets/images/product4/product_4_4_thumbnail.jpg"
      },
    ],
    name: "AQUA INTENSE Supreme Hyaluron Creme XXL",
    manufacturer: "M. Asam",
    price: {
      amount: 29.99,
      currency: "€",
    },
    discount: 0,
    quantity: {
      amount: 100,
      unit: "ml",
      isXXL: true,
    },
    badge: "onlineOnly",
    listDescription: {
      short: "24h Pflege",
      long: "Parfümfreie Hyaluroncreme für pralle Haut & intensive Feuchtigkeit",
    },
    pageDescription: {
      title: "Hyaluron Tagescreme für sichtbar prallere Haut",
      advantages: [
        { item: "Parfümfreie 24h Creme (100 ml) mit Hyaluronsäure" },
        { item: "Für jeden Hauttyp, speziell für sensible & trockene Haut" },
        {
          item: "Patentierter Hyaluronsäurekomplex* für intensive Feuchtigkeit",
        },
        {
          item: "Hyaluron sorgt sofort für pralle, glatte Haut & polstert Fältchen auf",
        },
        { item: "Für ein frisches, strahlendes Hautbild" },
      ],
    },
    ratings: 4.75,
    customersRated: 404
  }
];

export default productsData;
