const productsData= [
    { 
        "id": "1",
        "images": {
            "main": "assets/images/product1/product_1_main.jpg",
            "image2": "assets/images/product1/product_1_2.jpg",
            "image3": "assets/images/product1/product_1_3.jpg",
        },
        "name": "MAGIC FINISH Make-up Mousse",
        "producer": "M. Asam",
        "price": {
            "amount": 25.99,
            "currency": "€"
            },
        "discount" : 0,
        "quantity": {
            "amount": 30,
            "unit": "ml",
            "isXXL": false
            },
        "badge": "bestSeller",
        "description" : {
            "short": "Make-up Mousse",
            "long": "Kaschiert sofort Rötungen, Fältchen & Poren für ein perfektes Hautbild"
        },
        "ratings": 4,
        "availability" : 3
    },
    { 
        "id": "2",
        "images": {
            "main": "assets/images/product2/product_2_main.jpg",
            "image2": "assets/images/product2/product_2_2.jpg",
            "image3": "assets/images/product2/product_2_3.jpg",
        },
        "name": "PERFECT TEINT", 
        "producer": "M. Asam",
        "price": {
            "amount": 19.75,
            "currency": "€"
            },
        "discount" : 14,  
        "quantity": {
            "amount": 30,
            "unit": "ml",
            "isXXL": false
            },
        "badge": "gratis",
        "description" : {
            "short": "Soforteffekt",
            "long": "Sofortiger Weichzeichner für ein porenverfeinertes Hautbild"
        },
        "ratings": 4,
        "availability" : 3
    },
    { 
        "id": "3",
        "images": {
            "main": "assets/images/product3/product_3_main.jpg",
            "image2": "assets/images/product3/product_3_2.jpg",
            "image3": "assets/images/product3/product_3_3.jpg",
        },
        "name": "VINO GOLD Tages- und Nachtcreme XXL",
        "producer": "M. Asam",
        "price": {
            "amount": 24.99,
            "currency": "€"
            },
        "discount" : 0,
        "quantity": {
            "amount": 200,
            "unit": "ml",
            "isXXL": true
            },
        "badge": "gratis",
        "description" : {
            "short": "24h Pflege",
            "long": "Anti-Aging Tages- und Nachtcreme zur sichtbaren Faltentiefenreduzierung"
        },
        "ratings": 4.5,
        "availability" : 3
    },
    { 
        "id": "4",
        "images": {
            "main": "assets/images/product4/product_4_main.jpg",
            "image2": "assets/images/product4/product_4_2.jpg",
            "image3": "assets/images/product4/product_4_3.jpg",
            "image4": "assets/images/product4/product_4_4.jpg",
        },
        "name": "AQUA INTENSE Supreme Hyaluron Creme XXL",
        "producer": "M. Asam", 
        "price": {
            "amount": 29.99,
            "currency": "€"
            },
        "discount" : 0,
        "quantity": {
            "amount": 100,
            "unit": "ml",
            "isXXL": true
            },
        "badge": "onlineOnly",
        "description" : {
            "short": "24h Pflege",
            "long": "Parfümfreie Hyaluroncreme für pralle Haut & intensive Feuchtigkeit"
        },
        "ratings": 5,
        "availability" : 3
    }
   
  ]

  export default productsData;