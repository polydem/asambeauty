const productsData = [
  {
    id: "1",
    images: [
      {
        id: "101",
        path: "assets/images/product1/product_1_main.jpg",
      },
      {
        id: "102",
        path: "assets/images/product1/product_1_2.jpg",
      },
      {
        id: "103",
        path: "assets/images/product1/product_1_3.jpg",
      },
    ],
    name: "MAGIC FINISH Make-up Mousse",
    producer: "M. Asam",
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
    description: {
      short: "Make-up Mousse",
      long: "Kaschiert sofort Rötungen, Fältchen & Poren für ein perfektes Hautbild",
    },
    ratings: 4,
    availability: 3,
  },
  {
    id: "2",
    images: [
      {
        id: "201",
        path: "assets/images/product2/product_2_main.jpg",
      },
      {
        id: "202",
        path: "assets/images/product2/product_2_2.jpg",
      },
      {
        id: "203",
        path: "assets/images/product2/product_2_3.jpg",
      },
    ],
    name: "PERFECT TEINT",
    producer: "M. Asam",
    price: {
      amount: 19.75,
      currency: "€",
    },
    discount: 14,
    quantity: {
      amount: 30,
      unit: "ml",
      isXXL: false,
    },
    badge: "gratis",
    description: {
      short: "Soforteffekt",
      long: "Sofortiger Weichzeichner für ein porenverfeinertes Hautbild",
    },
    ratings: 4,
    availability: 3,
  },
  {
    id: "3",
    images: [
      {
        id: "301",
        path: "assets/images/product3/product_3_main.jpg",
      },
      {
        id: "302",
        path: "assets/images/product3/product_3_2.jpg",
      },
      {
        id: "303",
        path: "assets/images/product3/product_3_3.jpg",
      },
    ],
    name: "VINO GOLD Tages- und Nachtcreme XXL",
    producer: "M. Asam",
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
    description: {
      short: "24h Pflege",
      long: "Anti-Aging Tages- und Nachtcreme zur sichtbaren Faltentiefenreduzierung",
    },
    ratings: 4.5,
    availability: 3,
  },
  {
    id: "4",
    images: [
      {
        id: "401",
        path: "assets/images/product4/product_4_main.jpg",
      },
      {
        id: "402",
        path: "assets/images/product4/product_4_2.jpg",
      },
      {
        id: "403",
        path: "assets/images/product4/product_4_3.jpg",
      },
      {
        id: "404",
        path: "assets/images/product4/product_4_4.jpg",
      },
    ],
    name: "AQUA INTENSE Supreme Hyaluron Creme XXL",
    producer: "M. Asam",
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
    description: {
      short: "24h Pflege",
      long: "Parfümfreie Hyaluroncreme für pralle Haut & intensive Feuchtigkeit",
    },
    ratings: 5,
    availability: 3,
  },
];

export default productsData;
